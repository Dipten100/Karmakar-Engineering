import React, { useContext } from "react";
import GetIcon from "./GetIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { AllContext } from "../Context/ContextProvider";

const CartButton = () => {
  const { Cart } = useContext(AllContext);

  const location=useLocation()
  const pathName=location.pathname

  const navigator = useNavigate();

  const handleGoToCartPage = () => {
    navigator("/cartpage");
  };

  return (
    <div
      className={`cart-button ${Cart.length === 0 ? "d-none" : ""} ${pathName==="/cartpage"?"d-none":""}`}
      onClick={handleGoToCartPage}
    >
      <GetIcon IconName={"BsCart4"} />
      <div className="counting">{Cart && Cart.length}</div>
    </div>
  );
};

export default CartButton;
