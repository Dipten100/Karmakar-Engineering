import React, { useState } from "react";
import MainCarousel from "./MainCarousel";
import MainCarouselImage from "../assets/data/Home/MainCarouselImage";
import Products from "../assets/data/Products/Products";
import Rattings from "../Components/Rattings";
import GetIcon from "../Components/GetIcon";
import MultiItemCarousel from "./MultiItemCarousel";
import CountUp from 'react-countup';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const topSellingProducts = Products.sort(
    (a, b) => b.salesNumber - a.salesNumber
  ).slice(0, 3);

  let users=975 ;
  let products=1570;

  const navigator=useNavigate()


  return (
    <div className="home-section set-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="main-carousel">
              <MainCarousel images={MainCarouselImage} />
            </div>
            <div className="some-products">
              <div className="title">
                <p>There our top selling products</p>
              </div>
              <div className="top-selling-products">
                {topSellingProducts.map((item, i) => (
                  <div className="top-selling-product" key={i}>
                    <div className="product-img">
                      <img
                        src={`../src/assets/images/homeCarouselImage/${item.images[0]}`}
                        alt={`${item.images[0]}`}
                        className="img-fluid equal-images"
                      />
                    </div>
                    <div className="product-description">
                      <div className="title">{item.title}</div>
                      <div className="rating">
                        <Rattings rating={item.overAllRatings} />
                        <span>( {item.overAllRatings} )</span>
                      </div>
                    </div>
                    <div className="product-link" onClick={()=>navigator(`/order/${item._id}`)}>
                      <GetIcon IconName={"FaArrowRight"} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="button">
                <button type="button" className="lab-btn" onClick={()=>navigator("/order")}>
                  Go to Order Page <GetIcon IconName={"FaArrowRight"} />
                </button>
              </div>
            </div>
            <div className="contact-with-us">
              <div className="tabs">
                <div className="tab">
                  <div className="icon">
                    <GetIcon IconName={"FaUser"} />
                  </div>
                  <div className="text">
                    <CountUp end={users} duration={5} /> + Users
                  </div>
                </div>
                <div className="tab">
                  <div className="icon">
                    <GetIcon IconName={"IoBagHandle"} />
                  </div>
                  <div className="text">
                    <CountUp end={products} duration={5} />+ Products
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form className="lab-form">
                  <div className="form-input">
                    <input type="text" placeholder="Enter your name " />
                  </div>
                  <div className="form-input">
                    <input type="email" placeholder="Enter your email " />
                  </div>
                  <div className="form-input">
                    <input type="number" placeholder="Enter your phone " />
                  </div>
                  <div className="button">
                    <button type="submit" className="lab-btn">
                      Join With Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="customers-reviews">
              <MultiItemCarousel />
              <div className="button">
                <button type="button" className="lab-btn">
                  Give Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
