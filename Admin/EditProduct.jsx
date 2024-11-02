import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../assets/Products/Products";
import PageHeader from "../Components/PageHeader";
import GetIcon from "../Components/GetIcon";
import Rattings from "../Components/Rattings";

const EditProduct = () => {
  const [ProductDetails, setProductDetails] = useState({});
  const [FormValue, setFormValue] = useState({
    status: "old",
    title: "",
    images: [],
    description: "",
    qualities: [
      {
        key: "",
        value: "",
      },
    ],
    salesNumber: 0,
    likes: 0,
    overAllRatings: 0,
    reviews: [
      {
        img: "img1.jpg",
        name: "user 1",
        rating: 4.5,
        comments: "It's a good project",
      },
      {
        img: "img1.jpg",
        name: "user 1",
        rating: 4.5,
        comments: "It's a good project",
      },
      {
        img: "img1.jpg",
        name: "user 1",
        rating: 4.5,
        comments: "It's a good project",
      },
    ],
  });

  const { id } = useParams();

  useEffect(() => {
    const prod = Products.filter((item, i) => item._id === id);
    if (prod) {
      setProductDetails(prod[0]);
    }
  }, []);

  const handleDeleteImg = (key) => {
    const newImages = FormValue.images.filter((img, i) => i !== key);
    setFormValue({ ...FormValue, images: newImages });
  };

  const handleKeyValueChange = (key, value) => {
    const newQualities = [...FormValue.qualities];
    newQualities[key].key = value;
    setFormValue({
      ...FormValue,
      qualities: newQualities,
    });
  };

  const handleValueValueChange = (key, value) => {
    const newQualities = [...FormValue.qualities];
    newQualities[key].value = value;
    setFormValue({
      ...FormValue,
      qualities: newQualities,
    });
  };

  const handleAddNewFeild = (e) => {
    e.preventDefault();
    const newField = {
      key: "",
      value: "",
    };
    const newQualities = FormValue.qualities.filter(
      (item, i) => i === FormValue.qualities.length - 1
    );
    if (!(newQualities[0].key === "" && newQualities[0].value === "")) {
      setFormValue({
        ...FormValue,
        qualities: FormValue.qualities.concat([newField]),
      });
    }
  };

  const handleRemoveFeild = (key) => {
    const newQualities = FormValue.qualities.filter((item, i) => i !== key);
    setFormValue({
      ...FormValue,
      qualities: newQualities,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormValue);
  };

  return (
    <>
      <PageHeader PageTitle={"Edit Product Details"} />
      <div className="edit-product-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <form className="edit-product-form" onSubmit={handleSubmit}>
                <div className="form-input">
                  <label>Product Title:</label>
                  <input
                    type="text"
                    placeholder="Product title"
                    onChange={(e) =>
                      setFormValue({ ...FormValue, title: e.target.value })
                    }
                    value={FormValue.title}
                  />
                </div>
                <div className="form-input">
                  <label>Product Images:</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      setFormValue({
                        ...FormValue,
                        images: FormValue.images.concat([e.target.files]),
                      })
                    }
                  />
                </div>
                <div className="form-output-img">
                  {FormValue &&
                    FormValue.images &&
                    FormValue.images.map((item, i) => (
                      <div className="img-details">
                        <img
                          src={URL.createObjectURL(item[0])}
                          alt={item[0].name}
                          className="img-fluid equal-images"
                        />
                        <div className="text">{item[0].name}</div>
                        <button
                          type="button"
                          className="butn"
                          onClick={() => handleDeleteImg(i)}
                        >
                          <GetIcon IconName={"ImCross"} />
                        </button>
                      </div>
                    ))}
                </div>
                <div className="form-input">
                  <label>Product Description:</label>
                  <textarea
                    type="text"
                    placeholder="Product description"
                    onChange={(e) =>
                      setFormValue({
                        ...FormValue,
                        description: e.target.value,
                      })
                    }
                    value={FormValue.description}
                  />
                </div>
                <div className="form-multiple-input">
                  <label>Product Qualities:</label>
                  {FormValue.qualities.map((item, i) => (
                    <div className="key-value-pair" key={i}>
                      <input
                        type="text"
                        placeholder="e.g. width"
                        onChange={(e) =>
                          handleKeyValueChange(i, e.target.value)
                        }
                        value={item.key}
                      />
                      <input
                        type="text"
                        placeholder="e.g. 100 meter"
                        onChange={(e) =>
                          handleValueValueChange(i, e.target.value)
                        }
                        value={item.value}
                      />
                      <button
                        type="button"
                        className={`butn ${
                          i === FormValue.qualities.length - 1 ? "" : "d-none"
                        }`}
                        onClick={handleAddNewFeild}
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        className={`butn ${
                          i === FormValue.qualities.length - 1 ? "d-none" : ""
                        }`}
                        onClick={() => handleRemoveFeild(i)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                <div className="form-input">
                  <label>Product Sales Number:</label>
                  <textarea
                    type="text"
                    placeholder="Product sales number"
                    value={FormValue.salesNumber}
                    readOnly
                  />
                </div>
                <div className="form-input">
                  <label>Product Likes:</label>
                  <textarea
                    type="text"
                    placeholder="Product likes"
                    value={FormValue.likes}
                    readOnly
                  />
                </div>
                <div className="form-input">
                  <label>Product Overall Ratings:</label>
                  <textarea
                    type="text"
                    placeholder="Product overall ratings"
                    value={FormValue.overAllRatings}
                    readOnly
                  />
                </div>
                {/* <div className="form-output-reviews">
                  <label>Product Reviews:</label>
                  <div className="review-section">
                    {FormValue.reviews.map((review, i) => (
                      <div key={i} className="review">
                        <div className="review-img">
                          <img
                            src={`../src/assets/images/homeCarouselImage/${review.img}`}
                            alt={review.img}
                            className="img-fluid equal-images"
                          />
                        </div>
                        <div className="review-body">
                          <div className="review-name">
                            <p>{review.name}</p>
                            <p>
                              <Rattings rating={review.rating} />(
                              {review.rating})
                            </p>
                          </div>
                          <div className="review-comments">
                            {review.comments}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
                <div className="form-input">
                  <button type="submit" className="butn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
