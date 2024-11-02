import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { useParams } from "react-router-dom";
import Products from "../assets/Products/Products";
import GetIcon from "../Components/GetIcon";
import Rattings from "../Components/Rattings";

const EditProducts = () => {
  const [ProductDetails, setProductDetails] = useState({});
  const [FormValue, setFormValue] = useState({
    status: "old",
    title: "",
    images: [
      // {
      //   status:"old",
      //   img:"",
      // },
    ],
    description: "",
    qualities: [
      // {
      //   key: "",
      //   value: "",
      // },
    ],
    salesNumber: 0,
    likes: 0,
    overAllRatings: 0,
    reviews: [],
  });

  const { id } = useParams();

  useEffect(() => {
    const prod = Products.filter((item, i) => item._id === id);
    if (prod) {
      setProductDetails(prod[0]);

      // images set
      const imgs = prod[0].images;
      let imageFolder = [];
      imgs.forEach((img) => {
        imageFolder.push({ status: "old", img: img });
      });

      // qualities set
      const qual = prod[0].qualities;
      let qualitiesFolder = [];
      qual.forEach((quality) => {
        qualitiesFolder.push({
          key: Object.keys(quality)[0],
          value: Object.values(quality)[0],
        });
      });
      setFormValue({
        title: prod[0].title,
        images: imageFolder,
        description: prod[0].description,
        qualities: qualitiesFolder,
        salesNumber: prod[0].salesNumber,
        likes: prod[0].likes,
        overAllRatings: prod[0].overAllRatings,
        reviews: prod[0].reviews,
      });
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

  const handleReviewDelete = (key) => {
    const length = FormValue.reviews.length;
    const prevReviewsRattings = Number(
      FormValue.reviews.filter((item, i) => i === key)[0]?.rating
    );
    const newReviews = FormValue.reviews.filter((item, i) => i !== key);
    const prevRattings = Number(FormValue.overAllRatings);
    // const newRattings=prevRattings-(prevRattings-prevReviewsRattings)/(length-1);
    const newRattings =
      (length * prevRattings - prevReviewsRattings) / (length - 1);
    setFormValue({
      ...FormValue,
      reviews: newReviews,
      overAllRatings: newRattings,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const conformation=confirm("After submit your values are not change any more...")
    if(conformation){
      console.log(FormValue);
    }
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
                        images: FormValue.images.concat([
                          {
                            status: "new",
                            img: e.target.files,
                          },
                        ]),
                      })
                    }
                  />
                </div>
                <div className="form-output-img">
                  {FormValue &&
                    FormValue.images &&
                    FormValue.images.map((item, i) => (
                      <div className="img-details" key={i}>
                        {item.status === "old" && (
                          <>
                            <img
                              src={`../src/assets/images/homeCarouselImage/${item.img}`}
                              alt={item.img}
                              className="img-fluid equal-images"
                            />
                            <div className="text">{item.img}</div>
                          </>
                        )}
                        {item.status === "new" && (
                          <>
                            <img
                              src={URL.createObjectURL(item.img[0])}
                              alt={item.img[0].name}
                              className="img-fluid equal-images"
                            />
                            <div className="text">{item.img[0].name}</div>
                          </>
                        )}
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
                  {FormValue?.qualities?.map((item, i) => (
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
                  <input
                    type="text"
                    placeholder="Product sales number"
                    value={FormValue.salesNumber}
                    readOnly
                  />
                </div>
                <div className="form-input">
                  <label>Product Likes:</label>
                  <input
                    type="text"
                    placeholder="Product likes"
                    value={FormValue.likes}
                    readOnly
                  />
                </div>
                <div className="form-input">
                  <label>Product Overall Ratings:</label>
                  <input
                    type="text"
                    placeholder="Product overall ratings"
                    value={FormValue.overAllRatings}
                    readOnly
                  />
                </div>
                <div className="form-output-reviews">
                  <label>Product Reviews:</label>
                  <div className="review-section">
                    {FormValue.reviews.map((review, i) => (
                      <div key={i} className="review">
                        <div className="review-img">
                          <img
                            src={`../src/assets/images/homeCarouselImage/${review?.img}`}
                            alt={review?.img}
                            className="img-fluid equal-images"
                          />
                        </div>
                        <div className="review-body">
                          <div className="review-name">
                            <p>{review?.name}</p>
                            <p>
                              <Rattings rating={review.rating} />(
                              {review?.rating})
                            </p>
                          </div>
                          <div className="review-comments">
                            {review?.comments}
                          </div>
                        </div>
                        <div className="butns">
                          <button
                            type="button"
                            className="butn"
                            onClick={() => handleReviewDelete(i)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-input">
                  <button type="submit" className="butn">
                    Update
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

export default EditProducts;
