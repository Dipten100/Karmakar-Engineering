import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import OrderData from "../assets/OrderData/OrderData";
import GetIcon from "../Components/GetIcon";
import PageHeader from "../Components/PageHeader";
import OrderDataShow from "./OrderDataShow";
import CustomerDataShow from "./CustomerDataShow";

const Order = () => {
  const [AllOrder, setAllOrder] = useState([]);
  const [RunningOrder, setRunningOrder] = useState([]);
  const [OrderTable, setOrderTable] = useState([]);
  const [OrderTableHeadFixed, setOrderTableHeadFixed] = useState(false);
  const [SortByOrderDate, setSortByOrderDate] = useState(true);
  const [SortByDeliveryDate, setSortByDeliveryDate] = useState(false);
  const [Search, setSearch] = useState("");
  const [OrderDate, setOrderDate] = useState("");
  const [DeliveryDate, setDeliveryDate] = useState("");
  const [PaymentDone, setPaymentDone] = useState(false);
  const [OrderDelivery, setOrderDelivery] = useState(false);
  const [NewOrder, setNewOrder] = useState(false);

  useEffect(() => {
    setAllOrder(OrderData);
    if (OrderData) {
      setRunningOrder(
        OrderData.filter(
          (item) =>
            !(
              item.orderStatus === "Delivered" &&
              item.paymentStatus === "Success"
            )
        )
      );
      setOrderTable(
        OrderData.filter(
          (item) =>
            !(
              item.orderStatus === "Delivered" &&
              item.paymentStatus === "Success"
            )
        )
      );
    }
  }, [AllOrder]);

  useEffect(() => {
    setPaymentDone(false);
    setOrderDelivery(false);
    setNewOrder(false);
    if (Search != "") {
      const filteredData = AllOrder.filter((item) =>
        item._id.toLowerCase().includes(Search.toLowerCase())
      );
      setOrderTable(filteredData);
    } else {
      setOrderTable(RunningOrder);
    }
  }, [Search]);

  useEffect(() => {
    if (OrderDate != "") {
      const filteredData = AllOrder.filter((item) =>
        item.orderDate.includes(OrderDate)
      );
      setOrderTable(filteredData);
    }else{
      setOrderTable(RunningOrder)
    }
  }, [OrderDate]);

  useEffect(() => {
    if (DeliveryDate != "") {
      const filteredData = AllOrder.filter((item) =>
        item.deliveryDate.includes(DeliveryDate)
      );
      setOrderTable(filteredData);
    }else{
      setOrderTable(RunningOrder)
    }
  }, [DeliveryDate]);

  useEffect(() => {
    if (PaymentDone && OrderDelivery) {
      const filteredData = RunningOrder.filter(
        (item) =>
          item.paymentStatus === "Success" && item.orderStatus === "Delivered"
      );
      setOrderTable(filteredData);
    } else if (PaymentDone && NewOrder) {
      const filteredData = RunningOrder.filter(
        (item) =>
          item.paymentStatus === "Success" && item.orderStatus === "Pending"
      );
      setOrderTable(filteredData);
    } else if (!PaymentDone && OrderDelivery) {
      const filteredData = RunningOrder.filter(
        (item) => item.orderStatus === "Delivered"
      );
      setOrderTable(filteredData);
    } else if (!PaymentDone && NewOrder) {
      const filteredData = RunningOrder.filter(
        (item) => item.orderStatus === "Pending"
      );
      setOrderTable(filteredData);
    }else if (PaymentDone && (!OrderDelivery && !NewOrder)) {
      const filteredData = RunningOrder.filter(
        (item) => item.paymentStatus === "Success"
      );
      setOrderTable(filteredData);
    }  else {
      setOrderTable(RunningOrder);
    }
  }, [PaymentDone, OrderDelivery, NewOrder]);

  // sort by order date
  useEffect(()=>{
    if(SortByOrderDate){
      const sortedData = OrderTable.sort((a, b) => {
        const dateA = new Date(a.orderDate);
        const dateB = new Date(b.orderDate);
        return dateA - dateB; // Ascending order
        // return dateB - dateA; // Descending order
      });
      setOrderTable(sortedData);
    }else{
      const sortedData = OrderTable.sort((a, b) => {
        const dateA = new Date(a.orderDate);
        const dateB = new Date(b.orderDate);
        // return dateA - dateB; // Ascending order
        return dateB - dateA; // Descending order
      });
      setOrderTable(sortedData);
    }
  },[SortByOrderDate])
  
  // sort by delivery date
  useEffect(()=>{
    if(SortByDeliveryDate){
      const sortedData = OrderTable.sort((a, b) => {
        const dateA = new Date(a.deliveryDate);
        const dateB = new Date(b.deliveryDate);
        return dateA - dateB; // Ascending order
        // return dateB - dateA; // Descending order
      });
      setOrderTable(sortedData);
    }else{
      const sortedData = OrderTable.sort((a, b) => {
        const dateA = new Date(a.deliveryDate);
        const dateB = new Date(b.deliveryDate);
        // return dateA - dateB; // Ascending order
        return dateB - dateA; // Descending order
      });
      setOrderTable(sortedData);
    }
  },[SortByDeliveryDate])

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      setOrderTableHeadFixed(true);
    } else {
      setOrderTableHeadFixed(false);
    }
  });

  const handleSortTable = (feild, value) => {
    if (feild === "delivery" && value) {
      setOrderDelivery(true);
      setNewOrder(false);
    }else{
      setOrderDelivery(false);
    } 
    if (feild === "new" && value) {
      setOrderDelivery(false);
      setNewOrder(true);
    }else{
      setNewOrder(false);
    }
  };

  const handleValueChange = (key, feild, value) => {
    const updatedOrderTable = [...OrderTable];
    if (updatedOrderTable[key]) {
      updatedOrderTable[key][feild] = value;
    }
    setOrderTable(updatedOrderTable);
  };

  return (
    <>
      <PageHeader PageTitle={"Order Table"} />
      <div className="order-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 p-0 m-0">
              <div className="heading">Orders Status</div>
              <div className="order-table-status">
                <div className="status">
                  <span className="text">New Orders</span>
                  <span className="number">
                    {AllOrder &&
                      AllOrder.filter((item) => item.orderStatus === "Pending")
                        .length}
                  </span>
                </div>
                <div className="status">
                  <span className="text">Orders on Process</span>
                  <span className="number">
                    {AllOrder &&
                      AllOrder.filter(
                        (item) =>
                          item.orderStatus === "Work on" ||
                          item.orderStatus === "On the way"
                      ).length}
                  </span>
                </div>
                <div className="status">
                  <span className="text">Orders Delivered</span>
                  <span className="number">
                    {AllOrder &&
                      AllOrder.filter(
                        (item) => item.orderStatus === "Delivered"
                      ).length}
                  </span>
                </div>
              </div>
              <div className="heading">Sorting on Overall data</div>
              <div className="sorting-option">
                <div className="option">
                  <label>Sort by: Order ID</label>
                  <input
                    type="text"
                    placeholder="Enter Order ID"
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="option">
                  <label>Sort by: Perticular Order Date</label>
                  <input
                    type="date"
                    value={OrderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                  />
                </div>
                <div className="option">
                  <label>Sort by: Perticular Delivery Date</label>
                  <input
                    type="date"
                    value={DeliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="heading">Sorting on Current Table data</div>
              <div className="sorting-option">
                <div className="option check-btn">
                  <label>Sort by: Payment Done</label>
                  <input
                    type="checkbox"
                    checked={PaymentDone}
                    onChange={(e) =>
                      setPaymentDone(e.target.checked)
                    }
                  />
                </div>
                <div className="option check-btn">
                  <label>Sort by: Order Delivered</label>
                  <input
                    type="checkbox"
                    checked={OrderDelivery}
                    onChange={(e) =>
                      handleSortTable("delivery", e.target.checked)
                    }
                  />
                </div>
                <div className="option check-btn">
                  <label>Sort by: New Order</label>
                  <input
                    type="checkbox"
                    checked={NewOrder}
                    onChange={(e) => handleSortTable("new", e.target.checked)}
                  />
                </div>
              </div>
              <Table className="order-table w-100">
                <thead className={`${OrderTableHeadFixed ? "head-fixed" : ""}`}>
                  <tr>
                    <th>Order ID</th>
                    <th>
                      Order Date
                      <br />
                      (YYYY-MM-DD)
                      <span
                        className={`sort ${SortByOrderDate ? "d-none" : ""}`}
                        onClick={() => setSortByOrderDate(!SortByOrderDate)}
                      >
                        <GetIcon IconName={"FaArrowUpWideShort"} />
                      </span>
                      <span
                        className={`sort ${SortByOrderDate ? "" : "d-none"}`}
                        onClick={() => setSortByOrderDate(!SortByOrderDate)}
                      >
                        <GetIcon IconName={"FaArrowUpShortWide"} />
                      </span>
                    </th>
                    <th>
                      Delivery Date
                      <br />
                      (YYYY-MM-DD)
                      <span
                        className={`sort ${SortByDeliveryDate ? "d-none" : ""}`}
                        onClick={() =>
                          setSortByDeliveryDate(!SortByDeliveryDate)
                        }
                      >
                        <GetIcon IconName={"FaArrowUpWideShort"} />
                      </span>
                      <span
                        className={`sort ${SortByDeliveryDate ? "" : "d-none"}`}
                        onClick={() =>
                          setSortByDeliveryDate(!SortByDeliveryDate)
                        }
                      >
                        <GetIcon IconName={"FaArrowUpShortWide"} />
                      </span>
                    </th>
                    <th>Order Status</th>
                    <th>Payment Status</th>
                    <th>Complete Price</th>
                    <th>Order Description</th>
                    <th>Customer Details</th>
                  </tr>
                </thead>
                <tbody>
                  {OrderTable &&
                    OrderTable.map((item, i) => (
                      <tr key={i} className="fs-5">
                        <td>{item._id}</td>
                        <td>{item.orderDate}</td>
                        <td>
                          <input
                            type="date"
                            value={item.deliveryDate}
                            onChange={(e) =>
                              handleValueChange(
                                i,
                                "deliveryDate",
                                e.target.value
                              )
                            }
                            className="border-none"
                          />
                        </td>
                        <td>
                          <select
                            value={item.orderStatus}
                            onChange={(e) =>
                              handleValueChange(
                                i,
                                "orderStatus",
                                e.target.value
                              )
                            }
                            className="border-none"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Work on">Work on</option>
                            <option value="On the way">On the way</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Reject">Reject</option>
                          </select>
                        </td>
                        <td>
                          <select
                            value={item.paymentStatus}
                            onChange={(e) =>
                              handleValueChange(
                                i,
                                "paymentStatus",
                                e.target.value
                              )
                            }
                            className="border-none"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Success">Success</option>
                            <option value="Failure">Failure</option>
                          </select>
                        </td>
                        <td>{item.completePrice}</td>
                        <td>
                          <OrderDataShow
                            orderID={item._id}
                            order={item.order}
                          />
                        </td>
                        <td>
                          <CustomerDataShow
                            orderID={item._id}
                            customer={item.customer}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
