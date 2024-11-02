import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";

const GetIcon = ({IconName}) => {
    const libraries = [
        {
          name: "FaEye",
          icon: FaEye,
        },
        {
          name: "FaEyeSlash",
          icon: FaEyeSlash,
        },
        {
          name: "FaFacebookSquare",
          icon: FaFacebookSquare,
        },
        {
          name: "FaInstagramSquare",
          icon: FaInstagramSquare,
        },
        {
          name: "FaWhatsappSquare",
          icon: FaWhatsappSquare,
        },
        {
          name: "FaPhoneAlt",
          icon: FaPhoneAlt,
        },
        {
          name: "MdEmail",
          icon: MdEmail,
        },
        {
          name: "IoLocationSharp",
          icon: IoLocationSharp,
        },
        {
          name: "FaArrowRight",
          icon: FaArrowRight,
        },
        {
          name: "FaUser",
          icon: FaUser,
        },
        {
          name: "IoBagHandle",
          icon: IoBagHandle,
        },
        {
          name: "FaStar",
          icon: FaStar,
        },
        {
          name: "FaStarHalfAlt",
          icon: FaStarHalfAlt,
        },
        {
          name: "FaSearch",
          icon: FaSearch,
        },
        {
          name: "FaPlus",
          icon: FaPlus,
        },
        {
          name: "FaAngleDoubleLeft",
          icon: FaAngleDoubleLeft,
        },
        {
          name: "FaAngleDoubleRight",
          icon: FaAngleDoubleRight,
        },
        {
          name: "FaShoppingCart",
          icon: FaShoppingCart,
        },
        {
          name: "BsCart4",
          icon: BsCart4,
        },
        {
          name: "FcLike",
          icon: FcLike,
        },
        {
          name: "FcDislike",
          icon: FcDislike,
        },
        {
          name: "FaMinus",
          icon: FaMinus,
        },
        {
          name: "RiDeleteBin6Fill",
          icon: RiDeleteBin6Fill,
        },
        {
          name: "ImCross",
          icon: ImCross,
        },
        {
          name: "FaEdit",
          icon: FaEdit,
        },
        {
          name: "FaFilePdf",
          icon: FaFilePdf,
        },
        {
          name: "FaImages",
          icon: FaImages,
        },
        {
          name: "MdLocationOn",
          icon: MdLocationOn,
        },
        {
          name: "FaSearchLocation",
          icon: FaSearchLocation,
        },
      ];
    
      const result = libraries.find((item) => item.name === IconName);

  return (
    <>{result && <result.icon />}</>
  )
}

export default GetIcon