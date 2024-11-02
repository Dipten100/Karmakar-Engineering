import React, { useContext, useState } from "react";
import { AllContext } from "../Context/ContextProvider";
import GetIcon from "./GetIcon";
import { Modal, Table } from "react-bootstrap";
import IndiaState from "../assets/data/stateName/IndiaState";

const CartPage = () => {
  const [Show, setShow] = useState(false);
  const [ChangeAddress, setChangeAddress] = useState(false);
  const [ContactForm, setContactForm] = useState({
    name: "",
    phone: "",
    alternatePhone: "",
    pincode: "",
    address: "",
    landmarks: "",
    country: "",
    state: "",
    city: "",
    defaultUse: false,
  });

  const { Cart, setCart } = useContext(AllContext);

  const handleDecrease = (key) => {
    const newProductCart = [...Cart];
    if (newProductCart[key].Quantity > 1) {
      newProductCart[key].Quantity -= 1;
    }
    setCart(newProductCart);
  };

  const handleIncrease = (key) => {
    const newProductCart = [...Cart];
    newProductCart[key].Quantity += 1;
    setCart(newProductCart);
  };

  const handleValueUpdate = (key, value) => {
    const newProductCart = [...Cart];
    newProductCart[key].Quantity = Number(value);
    setCart(newProductCart);
  };

  const handleDelete = (key) => {
    const updatedCart = Cart.filter((item, i) => i !== key);
    setCart(updatedCart);
  };

  const handleModalClose = () => {
    setShow(false);
    setContactForm({
      name: "",
      phone: "",
      alternatePhone: "",
      pincode: "",
      address: "",
      landmarks: "",
      country: "",
      state: "",
      city: "",
      defaultUse: false,
    });
    setChangeAddress(false);
  };

  const handleEdit = (key) => {
    console.log(key);
    setShow(true);
  };

  const handleChange = () => {
    setShow(true);
    setChangeAddress(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ContactForm);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log(Cart);
    console.log(ContactForm);
  };

  console.log(Cart);

  return (
    <>
      <div className="cartpage-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9">
              <Table striped bordered hover size="sm">
                <thead>
                  <th>Product Details</th>
                  <th>Quantity</th>
                  <th>Edit Btn</th>
                </thead>
                <tbody>
                  {Cart &&
                    Cart.map((item, i) => (
                      <tr key={i}>
                        <td>
                          {item.Product.status === "new" &&
                            item.Product.images.length > 0 &&
                            item.Product.images[0].type ===
                              "application/pdf" && (
                                <span className="icon">
                                  <GetIcon IconName={"FaFilePdf"} />
                                </span>
                            )}
                          {item.Product.status === "new" &&
                            item.Product.images.length > 0 &&
                            item.Product.images[0].type === "image/png" && (
                              <span className="icon">
                                <GetIcon IconName={"FaImages"} />
                              </span>
                            )}
                          {item.Product.status === "new" &&
                            item.Product.images.length > 0 &&
                            item.Product.images[0].type === "image/jpeg" && (
                              <span className="icon">
                                <GetIcon IconName={"FaImages"} />
                              </span>
                            )}
                          {item.Product.status === "new" &&
                            item.Product.images.length > 0 &&
                            item.Product.images[0].type === "image/jpg" && (
                              <span className="icon">
                                <GetIcon IconName={"FaImages"} />
                              </span>
                            )}
                          {item.Product.status === "old" &&
                            item.Product.images.length > 0 && (
                              <img
                                src={`../src/assets/images/homeCarouselImage/${item.Product?.images[0]}`}
                                alt={item.Product?.images[0]}
                              />
                            )}
                          <span className="title">{item.Product.title}</span>
                        </td>
                        <td>
                          <span
                            className="minus"
                            onClick={() => handleDecrease(i)}
                          >
                            <GetIcon IconName={"FaMinus"} />
                          </span>
                          <input
                            type="number"
                            placeholder="Enter Quantity"
                            value={item.Quantity}
                            className="input-bx"
                            onChange={(e) =>
                              handleValueUpdate(i, e.target.value)
                            }
                          />
                          <span
                            className="plus"
                            onClick={() => handleIncrease(i)}
                          >
                            <GetIcon IconName={"FaPlus"} />
                          </span>
                        </td>
                        <td>
                          <span
                            className="delete-btn"
                            onClick={() => handleDelete(i)}
                          >
                            <GetIcon IconName={"RiDeleteBin6Fill"} />
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            <div className="col-3">
              <div className="place-order-details">
                <div className="title">Order Details ({Cart.length})</div>
                <div className="about">
                  You have {Cart.length} items to order. We will contact you to
                  decide about price and more.
                </div>
                <div className="contact-details">
                  <div className="add-new-address-details">
                    <div className="details">
                      Add new Address{" "}
                      <span onClick={() => setShow(true)}>
                        <GetIcon IconName={"FaPlus"} />{" "}
                      </span>
                    </div>
                    <div className="select-address">
                      <div className="name">Dipten Karmakar</div>
                      <div className="phone">+91 70440 83537</div>
                      <div className="address">Andul-mouri</div>
                      <div className="edit">
                        <span onClick={() => handleEdit(0)}>Edit</span>|
                        <span onClick={handleChange}>Change</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="lab-btn"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
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
        <div className={`modal-body ${ChangeAddress ? "d-none" : ""}`}>
          <div className="heading">
            <p>Add new contact details</p>
          </div>
          <form className="lab-form" onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter your full name *"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, name: e.target.value })
                }
                value={ContactForm.name}
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                placeholder="Enter your phone number *"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, phone: e.target.value })
                }
                value={ContactForm.phone}
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                placeholder="Enter alternate phone number"
                onChange={(e) =>
                  setContactForm({
                    ...ContactForm,
                    alternatePhone: e.target.value,
                  })
                }
                value={ContactForm.alternatePhone}
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                placeholder="Enter pincode (6 digits [0-9]) *"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, pincode: e.target.value })
                }
                value={ContactForm.pincode}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter your delivery address *"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, address: e.target.value })
                }
                value={ContactForm.address}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Landmark (E.g. near apollo hospital)"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, landmarks: e.target.value })
                }
                value={ContactForm.landmarks}
              />
            </div>
            <div className="form-input">
              <label htmlFor="country/region *">Country/Region *</label>
              <select
                name="country/region"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, country: e.target.value })
                }
                value={ContactForm.country}
              >
                <option value="India">India</option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="state">State *</label>
              <select
                name="state"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, state: e.target.value })
                }
                value={ContactForm.state}
              >
                {IndiaState &&
                  IndiaState.map((item, i) => (
                    <option value={Object.values(item)} key={i}>
                      {Object.values(item)}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Village/City *"
                onChange={(e) =>
                  setContactForm({ ...ContactForm, city: e.target.value })
                }
                value={ContactForm.city}
              />
            </div>
            <p className="other-info">
              Use this Address{" "}
              <span>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setContactForm({
                      ...ContactForm,
                      defaultUse: e.target.checked,
                    })
                  }
                  checked={ContactForm.defaultUse}
                />
              </span>
            </p>
            <div className="form-input">
              <button type="submit" className="lab-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={`modal-body ${ChangeAddress ? "" : "d-none"}`}>
          <div className="heading">
            <p>Change Address</p>
          </div>
          <div className="address-option">
            <div className="option active">
              <div className="name">Dipten Karmakar</div>
              <div className="phone">+91 7044083537</div>
              <div className="address">Andul-mouri</div>
            </div>
            <div className="option">
              <div className="name">Dipten Karmakar</div>
              <div className="phone">+91 7044083537</div>
              <div className="address">Andul-mouri</div>
            </div>
            <div className="option">
              <div className="name">Dipten Karmakar</div>
              <div className="phone">+91 7044083537</div>
              <div className="address">Andul-mouri</div>
            </div>
            <div className="option">
              <div className="name">Dipten Karmakar</div>
              <div className="phone">+91 7044083537</div>
              <div className="address">Andul-mouri</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CartPage;
