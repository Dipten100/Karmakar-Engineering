import React, { useContext, useEffect, useState } from "react";
import GetIcon from "../Components/GetIcon";
import { Carousel } from "react-bootstrap";
import { AllContext } from "../Context/ContextProvider";
import UserData from "../assets/UserData/UserData";

const SinglePageCarousel = ({ productId, Images, Likes }) => {
  const [Index, setIndex] = useState(0);
  const [Like, setLike] = useState(false);

  const { User, setUser } = useContext(AllContext);

  useEffect(() => {
    if (User === null) {
      // fetch user Data
      setUser(UserData);
    }
  }, []);

  useEffect(() => {
    if (User) {
      if (User.likedProductId) {
        const isLiked = User.likedProductId.find(
          (item) => String(item) == String(productId)
        );
        if(isLiked){
          setLike(true)
        }
      }
    }
  }, [User]);

  const handleSelect = (selectIndex) => {
    setIndex(selectIndex);
  };
  return (
    <div className="single-page-carousel">
      <div className="likes-number">
        <span>
          {Like ? (
            <GetIcon IconName={"FcLike"} />
          ) : (
            <GetIcon IconName={"FcDislike"} />
          )}
        </span>
        <p>{Likes} likes</p>
      </div>
      <Carousel activeIndex={Index} onSelect={handleSelect}>
        {Images &&
          Images.map((item, i) => (
            <Carousel.Item key={i}>
              <img
                src={`../src/assets/images/homeCarouselImage/${item}`}
                className="img-fluid equal-images"
                alt={item}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default SinglePageCarousel;
