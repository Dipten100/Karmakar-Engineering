import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewList from "../assets/data/Home/ReviewList";
import Rattings from "../Components/Rattings";

const MultiItemCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel responsive={responsive}>
      {ReviewList.map((item, i) => (
        <div className="review" key={i}>
          <div className="review-card-top">
            <div className="userImg">
              <img
                src={`../src/assets/images/homeCarouselImage/${item.imgname}`}
                alt={item.imgname}
                className="equal-images"
              />
            </div>
            <div className="text">
              <p className="name">{item.name}</p>
              <p>
                <Rattings rating={item.rating} />
              </p>
            </div>
          </div>
          <div className="review-card-bottom">
            <p className="comment">{item.comment}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MultiItemCarousel;
