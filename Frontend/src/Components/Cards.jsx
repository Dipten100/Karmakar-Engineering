import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../Context/ContextProvider";
import Products from "../assets/data/Products/Products";
import GetIcon from "./GetIcon";

const Cards = ({ Product }) => {
  const {Cart,setCart}=useContext(AllContext)

  const navigator=useNavigate()

  const handleViewMore=(id)=>{
    navigator(`/order/${id}`)
  }
  
  const handleAddToCart=(id)=>{
    const Product=Products.find((item)=>item._id===id)
    if(Product){
      setCart([...Cart,{Product,Quantity:1}])
    }
  }

  return (
    <div className="product-card">
      <div className="product-card-top">
        <div className="product-card-image">
          <img
            src={`../src/assets/images/homeCarouselImage/${Product.images[0]}`}
            alt={Product.images[0]}
            className="img-fluid equal-images"
          />
        </div>
        <div className="hover-show">
          <div className={`show`}>
            <GetIcon IconName={"FcLike"} />
          </div>
        </div>
      </div>
      <div className="product-card-middle">
        <div className="product-card-title">
            {Product.title}
        </div>
        <div className="product-card-description truncate">
            {Product.description}
        </div>
      </div>
      <div className="product-card-bottom">
        <div className="product-card-buttons">
            <button type="button" className="lab-btn" onClick={()=>handleViewMore(Product._id)}>View More...</button>
            <button type="button" className="lab-btn" onClick={()=>handleAddToCart(Product._id)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
