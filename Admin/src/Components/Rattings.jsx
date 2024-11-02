import React from "react";
import GetIcon from "./GetIcon";

const Rattings = ({ rating }) => {
  return (
    <div className="start-ratting">
      <div className={`start ${rating > 0 ? "glow" : ""}`}>
        {rating > 0 && rating < 1 ? (
          <GetIcon IconName={"FaStarHalfAlt"} />
        ) : (
          <GetIcon IconName={"FaStar"} />
        )}
      </div>
      <div className={`start ${rating > 1 ? "glow" : ""}`}>
        {rating > 1 && rating < 2 ? (
          <GetIcon IconName={"FaStarHalfAlt"} />
        ) : (
          <GetIcon IconName={"FaStar"} />
        )}
      </div>
      <div className={`start ${rating > 2 ? "glow" : ""}`}>
        {rating > 2 && rating < 3 ? (
          <GetIcon IconName={"FaStarHalfAlt"} />
        ) : (
          <GetIcon IconName={"FaStar"} />
        )}
      </div>
      <div className={`start ${rating > 3 ? "glow" : ""}`}>
        {rating > 3 && rating < 4 ? (
          <GetIcon IconName={"FaStarHalfAlt"} />
        ) : (
          <GetIcon IconName={"FaStar"} />
        )}
      </div>
      <div className={`start ${rating > 4 ? "glow" : ""}`}>
        {rating > 4 && rating < 5 ? (
          <GetIcon IconName={"FaStarHalfAlt"} />
        ) : (
          <GetIcon IconName={"FaStar"} />
        )}
      </div>
    </div>
  );
};

export default Rattings;
