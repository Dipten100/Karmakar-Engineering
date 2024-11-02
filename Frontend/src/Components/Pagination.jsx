import React, { useContext, useEffect, useState } from "react";
import GetIcon from "./GetIcon";
import { AllContext } from "../Context/ContextProvider";

const Pagination = ({ List }) => {
  const [Pages, setPages] = useState([]);
  const [SelectedPage, setSelectedPage] = useState(0);

  const { setStartPageId } = useContext(AllContext);
  
  const perPageItem=6

  useEffect(() => {
    setPages([]);
    setpage();
  }, [List]);

  useEffect(() => {
    sendId(SelectedPage);
  }, [Pages]);

  const setpage = async () => {
    let flag = 0;
    List.forEach((element) => {
      if (flag === 0) {
        setPages((prevPages) => [...prevPages, element._id]); // Update the pages state
      }
      if (flag === perPageItem-1) {
        flag = 0;
      } else {
        flag++;
      }
    });
  };

  const handlePrevBtn = () => {
    setSelectedPage(SelectedPage - 1);
    sendId(SelectedPage - 1);
  };
  const handleNextBtn = () => {
    setSelectedPage(SelectedPage + 1);
    sendId(SelectedPage + 1);
  };

  const sendId = (key) => {
    setSelectedPage(key);
      setStartPageId(Pages[key])
  };

  return (
    <div className="pagination">
      <div
        className={`btn ${SelectedPage === 0 ? "d-none" : ""}`}
        onClick={handlePrevBtn}
      >
        <GetIcon IconName={"FaAngleDoubleLeft"} />
      </div>
      {/* Pagination setup for less than 6 pages selection */}
      {Pages.length < 6 &&
        Pages.map((item, i) => (
          <>
            <div
              key={i}
              className={`pages ${SelectedPage === i ? "active" : ""}`}
              onClick={() => sendId(i)}
            >
              {i + 1}
            </div>
          </>
        ))}
      {/* Pagination setup for first 2 pages selection */}
      {Pages.length >= 6 && SelectedPage <= 2 && (
        <>
          {Pages.map((item, i) => (
            <div
              key={i}
              className={`pages ${SelectedPage === i ? "active" : ""} ${
                i < 4 ? "" : "d-none"
              }`}
              onClick={() => sendId(i)}
            >
              {i + 1}
            </div>
          ))}
          <div className="blur">...</div>
          {Pages.map((item, i) => (
            <div
              key={i}
              className={`pages ${SelectedPage === i ? "active" : ""} ${
                i === Pages.length - 1 ? "" : "d-none"
              }`}
              onClick={() => sendId(i)}
            >
              {i + 1}
            </div>
          ))}
        </>
      )}
      {/* Pagination setup for middle pages selection */}
      {Pages.length >= 6 &&
        SelectedPage > 2 &&
        SelectedPage < Pages.length - 3 && (
          <>
            {Pages.map((item, i) => (
              <div
                key={i}
                className={`pages ${SelectedPage === i ? "active" : ""} ${
                  i === 0 ? "" : "d-none"
                }`}
                onClick={() => sendId(i)}
              >
                {i + 1}
              </div>
            ))}
            <div className="blur">...</div>
            {Pages.map((item, i) => (
              <div
                key={i}
                className={`pages ${SelectedPage === i ? "active" : ""} ${
                  i === SelectedPage - 1 ? "" : "d-none"
                }`}
                onClick={() => sendId(i)}
              >
                {i + 1}
              </div>
            ))}
            {Pages.map((item, i) => (
              <div
                key={i}
                className={`pages ${SelectedPage === i ? "active" : ""} ${
                  i === SelectedPage ? "" : "d-none"
                }`}
                onClick={() => sendId(i)}
              >
                {i + 1}
              </div>
            ))}
            {Pages.map((item, i) => (
              <div
                key={i}
                className={`pages ${SelectedPage === i ? "active" : ""} ${
                  i === SelectedPage + 1 ? "" : "d-none"
                }`}
                onClick={() => sendId(i)}
              >
                {i + 1}
              </div>
            ))}
            <div className="blur">...</div>
            {Pages.map((item, i) => (
              <div
                key={i}
                className={`pages ${SelectedPage === i ? "active" : ""} ${
                  i === Pages.length - 1 ? "" : "d-none"
                }`}
                onClick={() => sendId(i)}
              >
                {i + 1}
              </div>
            ))}
          </>
        )}
      {/* Pagination setup for last 2 pages selection */}
      {Pages.length >= 6 && SelectedPage >= Pages.length - 3 && (
        <>
          {Pages.map((item, i) => (
            <div
              key={i}
              className={`pages ${SelectedPage === i ? "active" : ""} ${
                i === 0 ? "" : "d-none"
              }`}
              onClick={() => sendId(i)}
            >
              {i + 1}
            </div>
          ))}
          <div className="blur">...</div>
          {Pages.map((item, i) => (
            <div
              key={i}
              className={`pages ${SelectedPage === i ? "active" : ""} ${
                i >= Pages.length - 4 ? "" : "d-none"
              }`}
              onClick={() => sendId(i)}
            >
              {i + 1}
            </div>
          ))}
        </>
      )}
      <div
        className={`btn ${
          SelectedPage === Pages.length - 1 ? "d-none" : ""
        }`}
        onClick={handleNextBtn}
      >
        <GetIcon IconName={"FaAngleDoubleRight"} />
      </div>
    </div>
  );
};

export default Pagination;
