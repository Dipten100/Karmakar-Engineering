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
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdDashboardCustomize } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { RxExternalLink } from "react-icons/rx";

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
        {
          name: "TiArrowSortedUp",
          icon: TiArrowSortedUp,
        },
        {
          name: "TiArrowSortedDown",
          icon: TiArrowSortedDown,
        },
        {
          name: "MdDashboardCustomize",
          icon: MdDashboardCustomize,
        },
        {
          name: "FaInfo",
          icon: FaInfo,
        },
        {
          name: "PiCertificateFill",
          icon: PiCertificateFill,
        },
        {
          name: "AiFillProduct",
          icon: AiFillProduct,
        },
        {
          name: "FaClipboardList",
          icon: FaClipboardList,
        },
        {
          name: "SlCalender",
          icon: SlCalender,
        },
        {
          name: "FaArrowUpShortWide",
          icon: FaArrowUpShortWide,
        },
        {
          name: "FaArrowUpWideShort",
          icon: FaArrowUpWideShort,
        },
        {
          name: "RxExternalLink",
          icon: RxExternalLink,
        },
      ];
    
      const result = libraries.find((item) => item.name === IconName);

  return (
    <>{result && <result.icon />}</>
  )
}

export default GetIcon