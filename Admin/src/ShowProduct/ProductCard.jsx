import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ Product }) => {

    const navigate=useNavigate()

    const handleEdit=()=>{
        navigate(`/editproduct/${Product._id}`)
    }

  return (
    <div className="product-card">
      <div className="product-img">
        <img
          src={`../src/assets/images/homeCarouselImage/${Product.images[0]}`}
          alt={Product.images[0]}
          className="img-fluid equal-images"
        />
      </div>
      <div className="product-title">{Product.title}</div>
      <div className="butns">
        <button type="button" className="butn">Delete</button>
        <button type="button" className="butn" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default ProductCard;
