import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const MainCarousel = ({ allItem }) => {
  const [Index, setIndex] = useState(0);

  const handleSelect = (selectIndex) => {
    setIndex(selectIndex);
  };

  return (
    <Carousel activeIndex={Index} onSelect={handleSelect}>
      {allItem && allItem.map((item, i) => (
        <Carousel.Item key={i}>
          <div className="title">{item.title}</div>
          <div className="details">{item.details}</div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
