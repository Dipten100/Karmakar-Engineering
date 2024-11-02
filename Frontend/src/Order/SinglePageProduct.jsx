import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../assets/data/Products/Products";
import SinglePageCarousel from "./SinglePageCarousel";
import Rattings from "../Components/Rattings";
import GetIcon from "../Components/GetIcon";
import { AllContext } from "../Context/ContextProvider";

const SinglePageProduct = () => {
  const [Product, setProduct] = useState([]);
  const [Quantity, setQuantity] = useState(0);

  const { Cart, setCart } = useContext(AllContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const response = Products.find((item) => item._id === id);
    setProduct(response);
  }, [id]);

  const handleAddtoCart = () => {
    if (Quantity != 0) {
      setCart([...Cart, { Product, Quantity: Number(Quantity) }]);
    }
    setQuantity(0);
  };

  const handleSubmit = () => {
    // Order Now Btn Function
    if (Quantity != 0) {
      setCart([...Cart, { Product, Quantity: Number(Quantity) }]);
    }
    if (Cart.length != 0) {
      navigate("/cartpage");
    } else {
      alert("Cart is Empty");
    }
  };

  return (
    <div className="single-page-section set-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="product-img">
              {Product && (
                <SinglePageCarousel
                  productId={id}
                  Images={Product.images}
                  Likes={Product.likes}
                />
              )}
            </div>
            <div className="product-description">
              <div className="product-title">
                {Product?.title}
                <Rattings rating={Product?.overAllRatings} />
                {Product?.overAllRatings}( {Product?.reviews?.length} reviews )
              </div>
              <div className="description">{Product.description}</div>
            </div>
            <div className="product-details">
              <ul>
                {Product &&
                  Product.qualities &&
                  Product.qualities.map((item, i) => (
                    <li key={i}>
                      <div className="leftside">{Object.keys(item)}</div>
                      <div className="rightside">{Object.values(item)}</div>
                    </li>
                  ))}
              </ul>
            </div>
            <p className="review-title">
              Products Review
              <span>
                <GetIcon IconName={"FaPlus"} /> Add Review
              </span>
            </p>
            <div className="product-reviews">
              {Product &&
                Product.reviews &&
                Product.reviews.map((item, i) => (
                  <div className="review" key={i}>
                    <div className="reviewer-img-name-rating">
                      <div className="reviewer-img">
                        <img
                          src={`../src/assets/images/logo.jpg`}
                          alt="logo.jpg"
                          className="img-fluid equal-images"
                        />
                      </div>
                      <div className="reviewer-name-rating">
                        <div className="reviewer-name">{item.name}</div>
                        <div className="reviewer-rating">
                          <Rattings rating={item.rating} />
                        </div>
                      </div>
                    </div>
                    <div className="reviewer-comments">{item.comments}</div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-3">
            <div className="order-taken-form">
              <form className="lab-form" onSubmit={handleSubmit}>
                <div className="form-input">
                  <label htmlFor="quantity">Enter Number</label>
                  <input
                    type="Number"
                    name="quantity"
                    placeholder="Enter Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={Quantity}
                  />
                </div>
                <div className="order-btn">
                  <button
                    type="button"
                    className="lab-btn"
                    onClick={handleAddtoCart}
                  >
                    Add to cart
                  </button>
                  <button type="submit" className="lab-btn">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProduct;
