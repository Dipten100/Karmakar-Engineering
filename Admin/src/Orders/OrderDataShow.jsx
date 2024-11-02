import React, { useEffect, useState } from "react";
import GetIcon from "../Components/GetIcon";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderDataShow = ({ orderID, order }) => {
  const [Show, setShow] = useState(false);
  const [ShowOrder, setShowOrder] = useState({
    key: 0,
    productID: "",
    status: "",
    title: "",
    images: [],
    description: "",
    qualities: [],
    quantity: 0,
  });

  useEffect(() => {
    const details = order[0];
    if (details) {
      if (details.status === "old") {
        setShowOrder({
          key: 0,
          productID: details.productID,
          status: details.status,
          title: details.title,
          images: details.images,
          description: details.description,
          qualities: details.qualities,
          quantity: details.quantity,
        });
      } else {
        setShowOrder({
          key: 0,
          productID: null,
          status: details.status,
          title: details.title,
          images: details.images,
          description: details.description,
          qualities: details.qualities,
          quantity: details.quantity,
        });
      }
    }
  }, []);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleOrderShow = (key) => {
    const details = order[key];
    if (details) {
      if (details.status === "old") {
        setShowOrder({
          key: key,
          productID: details.productID,
          status: details.status,
          title: details.title,
          images: details.images,
          description: details.description,
          qualities: details.qualities,
          quantity: details.quantity,
        });
      } else {
        setShowOrder({
          key: key,
          productID: null,
          status: details.status,
          title: details.title,
          images: details.images,
          description: details.description,
          qualities: details.qualities,
          quantity: details.quantity,
        });
      }
    }
  };

  return (
    <>
      <div>
        <span
          className={`cursor-pointer ${Show ? "" : "d-none"}`}
          onClick={handleShow}
        >
          <GetIcon IconName={"FaEye"} />
        </span>
        <span
          className={`cursor-pointer ${Show ? "d-none" : ""}`}
          onClick={handleShow}
        >
          <GetIcon IconName={"FaEyeSlash"} />
        </span>
      </div>
      <Modal className="modal fade" show={Show} onHide={handleClose} centered>
        <div className={`modal-body`}>
          <div className="order-id">Order ID: {orderID}</div>
          <div className="order-pagination">
            {order &&
              order.map((item, i) => (
                <div
                  className={`page ${i === ShowOrder.key ? "active" : ""}`}
                  key={i}
                  onClick={() => handleOrderShow(i)}
                >
                  {i + 1}
                </div>
              ))}
          </div>
          <div className="order-body">
            {ShowOrder.status === "old" ? (
              <div className="order-details">
                <div className="order-title">
                  <div className="heading">Order title</div>
                  <div className="text">{ShowOrder.title}</div>
                </div>
                <div className="order-images">
                  <div className="heading">Order Files</div>
                  <button type="button" className="butn">
                    Download All
                  </button>
                </div>
                <div className="order-description">
                  <div className="heading">Order description</div>
                  <div className="text">{ShowOrder.description}</div>
                </div>
                <div className="order-qualities">
                  <div className="heading">Order qualities</div>
                  <ul>
                    {ShowOrder.qualities.map((item, i) => (
                      <li key={i}>
                        <span className="key">{Object.keys(item)}</span>
                        <span className="value">{Object.values(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-quantity">
                  <div className="heading">Order quantity</div>
                  {ShowOrder.quantity}
                </div>
                <div className="order-price">
                  <div className="heading">Order price per peice</div>
                  <div className="text">
                    <input type="number" placeholder="Enter price per peice" />
                    <button type="button" className="butn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="order-details">
                <div className="order-title">
                  <div className="heading">Order title</div>
                  <div className="text">{ShowOrder.title}</div>
                </div>
                <div className="order-images">
                  <div className="heading">Order Files</div>
                  <button type="button" className="butn">
                    Download All
                  </button>
                </div>
                <div className="order-description">
                  <div className="heading">Order description</div>
                  <div className="text">{ShowOrder.description}</div>
                </div>
                <div className="order-qualities">
                  <div className="heading">Order qualities</div>
                  <ul>
                    {ShowOrder.qualities.map((item, i) => (
                      <li key={i}>
                        <span className="key">{item.key}</span>
                        <span className="value">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-quantity">
                  <div className="heading">Order quantity</div>
                  {ShowOrder.quantity}
                </div>
                <div className="order-price">
                  <div className="heading">Order price per peice</div>
                  <div className="text">
                    <input type="number" placeholder="Enter price per peice" />
                    <button type="button" className="butn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OrderDataShow;
