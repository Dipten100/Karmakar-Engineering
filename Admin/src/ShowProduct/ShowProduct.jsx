import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import Products from "../assets/Products/Products";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ShowProduct = () => {
  const [AllProducts, setAlllProducts] = useState([]);

  const navigate=useNavigate()

  useEffect(() => {
    setAlllProducts(Products);
  }, []);

  const handleAddProduct=()=>{
    navigate(`/addnewproduct`)
  }

  return (
    <>
      <PageHeader PageTitle={"Show Products"} />
      <div className="show-product-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="add-butn">
                <button type="button" className="butn" onClick={handleAddProduct}>Add New Product</button>
              </div>
              <div className="show-products">
                {AllProducts &&
                  AllProducts.map((item, i) => (
                    <ProductCard Product={item} key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
