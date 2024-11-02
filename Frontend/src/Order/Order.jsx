import React, { useContext, useEffect, useState } from "react";
import Products from "../assets/data/Products/Products";
import Cards from "../Components/Cards";
import GetIcon from "../Components/GetIcon";
import Pagination from "../Components/Pagination";
import { AllContext } from "../Context/ContextProvider";
import { Modal } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";

const Order = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const [ShowProducts, setShowProducts] = useState([]);
  const [ShowPageProducts, setShowPageProducts] = useState([]);
  const [SearchItem, setSearchItem] = useState("");
  const [Show, setShow] = useState(false);
  const [ShowErrorInForm, setShowErrorInForm] = useState(false);
  const [NewOrderFormData, setNewOrderFormData] = useState({
    status: "new",
    title: "",
    description: "",
    images: [],
    qualities: [
      {
        key: "",
        value: "",
      },
    ],
    quantity: 1,
  });

  const { StartPageId, Cart, setCart } = useContext(AllContext);

  const perPageItem = 6;

  const fileTypes = ["JPG", "JPEG", "PNG", "PDF"];

  useEffect(() => {
    setAllProducts(Products);
    setShowProducts(Products);
  }, []);

  useEffect(() => {
    let flag = true;
    let count = 0;
    if (ShowProducts.length != 0) {
      ShowProducts.forEach((element) => {
        if (flag && element._id === StartPageId) {
          flag = false;
          count = 1;
          setShowPageProducts([element]);
        } else {
          if (count < perPageItem) {
            count++;
            setShowPageProducts((prevPages) => [...prevPages, element]);
          }
        }
      });
    } else {
      setShowPageProducts([]);
    }
  }, [ShowProducts, StartPageId]);

  useEffect(() => {
    if (AllProducts.length === 0) {
      // fetch data from backend
    } else {
      if (SearchItem === "") {
        setShowProducts(AllProducts);
      } else {
        const filterData = AllProducts.filter((item) =>
          item.title.toLowerCase().includes(SearchItem.toLowerCase())
        );
        setShowProducts(filterData);
      }
    }
  }, [SearchItem, AllProducts]);

  const handleModalClose = () => {
    setShow(false);
  };

  const handleAddNewFeild = (e) => {
    e.preventDefault();
    const newField = {
      key: "",
      value: "",
    };
    const newQualities = NewOrderFormData.qualities.filter(
      (item, i) => i === NewOrderFormData.qualities.length - 1
    );
    if (!(newQualities[0].key === "" && newQualities[0].value === "")) {
      setNewOrderFormData({
        ...NewOrderFormData,
        qualities: NewOrderFormData.qualities.concat([newField]),
      });
    }
  };

  const handleRemoveFeild = (key) => {
    const newQualities = NewOrderFormData.qualities.filter(
      (item, i) => i !== key
    );
    setNewOrderFormData({
      ...NewOrderFormData,
      qualities: newQualities,
    });
  };

  const handleFeildKeyChange = (key, value) => {
    const newQualities = [...NewOrderFormData.qualities];
    newQualities[key].key = value;
    setNewOrderFormData({
      ...NewOrderFormData,
      qualities: newQualities,
    });
  };

  const handleFeildValueChange = (key, value) => {
    const newQualities = [...NewOrderFormData.qualities];
    newQualities[key].value = value;
    setNewOrderFormData({
      ...NewOrderFormData,
      qualities: newQualities,
    });
  };

  const handleChange = (file) => {
    const Files = [...NewOrderFormData.images];
    Files.push(file);
    setNewOrderFormData({
      ...NewOrderFormData,
      images: Files,
    });
  };

  const handleFileDelete = (key) => {
    const updatedFile = NewOrderFormData.images.filter((item, i) => i !== key);
    setNewOrderFormData({
      ...NewOrderFormData,
      images: updatedFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < NewOrderFormData.qualities.length; i++) {
      const element = NewOrderFormData.qualities[i];
      if (i === NewOrderFormData.qualities.length - 1) {
        if (
          (element.key === "" && element.value != "") ||
          (element.key != "" && element.value === "")
        ) {
          setShowErrorInForm(true);
          return;
        } else {
          setShowErrorInForm(false);
        }
      } else {
        if (!(element.key != "" && element.value != "")) {
          setShowErrorInForm(true);
          return;
        } else {
          setShowErrorInForm(false);
        }
      }
    }
    NewOrderFormData.qualities.forEach((element) => {});
    if (NewOrderFormData.quantity <= 0) {
      setShowErrorInForm(true);
      return;
    } else {
      setShowErrorInForm(false);
    }
    if (!ShowErrorInForm) {
      setCart([
        ...Cart,
        { Product:NewOrderFormData, Quantity: NewOrderFormData.quantity },
      ]);
      setNewOrderFormData({
        status: "new",
        title: "",
        description: "",
        images: [],
        qualities: [
          {
            key: "",
            value: "",
          },
        ],
        quantity: 1,
      });
      setShowErrorInForm(false);
      handleModalClose();
    }
  };

  return (
    <>
      <div className="order-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="add-new-order">
                <div className="give-order" onClick={() => setShow(true)}>
                  <p>
                    <GetIcon IconName={"FaPlus"} /> New Order
                  </p>
                </div>
              </div>
              <div className="search-bar">
                <form className="serach-form">
                  <span className="search-icon">
                    <GetIcon IconName={"FaSearch"} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search by Product Name"
                    onChange={(e) => setSearchItem(e.target.value)}
                  />
                </form>
              </div>
              <div className="search-result">
                {ShowPageProducts &&
                  ShowPageProducts.map((product, i) => (
                    <Cards Product={product} key={i} />
                  ))}
                {ShowProducts.length === 0 && (
                  <p className="no-data-found">No Data Found ...</p>
                )}
              </div>
              {ShowProducts.length != 0 ? (
                <div className="pagination-section">
                  <Pagination List={ShowProducts} />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="modal fade"
        show={Show}
        onHide={handleModalClose}
        centered
      >
        <div className="modal-body">
          <div className="heading">
            <p>New Order</p>
          </div>
          <form className="lab-form" onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter product title"
                onChange={(e) =>
                  setNewOrderFormData({
                    ...NewOrderFormData,
                    title: e.target.value,
                  })
                }
                value={NewOrderFormData.title}
              />
            </div>
            <div className="form-input">
              <textarea
                type="text"
                placeholder="Enter details information about product"
                onChange={(e) =>
                  setNewOrderFormData({
                    ...NewOrderFormData,
                    description: e.target.value,
                  })
                }
                value={NewOrderFormData.description}
              />
            </div>
            <div className="form-input-multiple-feild">
              <label htmlFor="">Specification</label>
              {NewOrderFormData &&
                NewOrderFormData.qualities.map((item, i) => (
                  <div className="key-value-pair" key={i}>
                    <input
                      type="text"
                      placeholder="e.g. width"
                      onChange={(e) => handleFeildKeyChange(i, e.target.value)}
                      value={item.key}
                      className={`${
                        ShowErrorInForm &&
                        i != NewOrderFormData.qualities.length - 1 &&
                        item.key.length === 0
                          ? "error"
                          : ""
                      } ${
                        ShowErrorInForm &&
                        i === NewOrderFormData.qualities.length - 1 &&
                        item.key.length === 0 &&
                        item.value.length != 0
                          ? "error"
                          : ""
                      }`}
                    />
                    <input
                      type="text"
                      placeholder="e.g. 100 meter"
                      onChange={(e) =>
                        handleFeildValueChange(i, e.target.value)
                      }
                      value={item.value}
                      className={`${
                        ShowErrorInForm &&
                        i != NewOrderFormData.qualities.length - 1 &&
                        item.value.length === 0
                          ? "error"
                          : ""
                      } ${
                        ShowErrorInForm &&
                        i === NewOrderFormData.qualities.length - 1 &&
                        item.key.length != 0 &&
                        item.value.length === 0
                          ? "error"
                          : ""
                      }`}
                    />
                    <button
                      type="button"
                      className={`lab-btn ${
                        i != NewOrderFormData.qualities.length - 1
                          ? ""
                          : "d-none"
                      }`}
                      onClick={() => handleRemoveFeild(i)}
                    >
                      <GetIcon IconName={"FaMinus"} />
                    </button>
                    <button
                      type="button"
                      className={`lab-btn ${
                        i === NewOrderFormData.qualities.length - 1
                          ? ""
                          : "d-none"
                      }`}
                      onClick={handleAddNewFeild}
                    >
                      <GetIcon IconName={"FaPlus"} />
                    </button>
                  </div>
                ))}
            </div>
            <div className="form-input">
              <input
                type="number"
                placeholder="Enter Quantity"
                onChange={(e) =>
                  setNewOrderFormData({
                    ...NewOrderFormData,
                    quantity: Number(e.target.value),
                  })
                }
                value={NewOrderFormData.quantity}
                className={`${
                  ShowErrorInForm && NewOrderFormData.quantity <= 0
                    ? "error"
                    : ""
                }`}
              />
            </div>
            <div className="form-input-file">
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                className="file-upload"
              />
            </div>
            <div className="form-output">
              {NewOrderFormData.images.length > 0 &&
                NewOrderFormData.images.map((item, i) => (
                  <div className="output" key={i}>
                    <div className="icon">
                      {item.type === "application/pdf" && (
                        <GetIcon IconName={"FaFilePdf"} />
                      )}
                      {item.type === "image/png" && (
                        <GetIcon IconName={"FaImages"} />
                      )}
                      {item.type === "image/jpeg" && (
                        <GetIcon IconName={"FaImages"} />
                      )}
                      {item.type === "image/jpg" && (
                        <GetIcon IconName={"FaImages"} />
                      )}
                    </div>
                    <div className="details">{item.name}</div>
                    <div className="edit-btns">
                      <span onClick={() => handleFileDelete(i)}>
                        <GetIcon IconName={"ImCross"} />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="form-input">
              <button type="submit" className="lab-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Order;
