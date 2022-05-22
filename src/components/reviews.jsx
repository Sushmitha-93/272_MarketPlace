import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import queryString from "query-string";
import { useParams, useSearchParams } from "react-router-dom";
import { Button, Form, Card, Row, Col, Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import WriteReview from "./writeReview";
import { toast } from "react-toastify";
//import "./style.css";

export default function Reviews(props) {
  const [reviewsFromDb, setReviewsFromDb] = useState({});
  const [dummy, setDummy] = useState(false);
  const [images, setImages] = useState([]);

  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  // const params = useParams();
  // let flavour = params.flavour;

  let [searchParams, setSearchParams] = useSearchParams();
  let prodId = searchParams.get("prodId");
  let prodName = searchParams.get("prodName");
  let site = searchParams.get("site");

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  useEffect(() => {
    const images = importAll(
      require.context("../img", false, /\.(png|jpe?g|svg)$/)
    );
    setImages(images);

    let formData = new FormData();
    formData.append("prodId", prodId);

    const url =
      "https://tutorawayphpbackend.000webhostapp.com/getMarketProdReviews.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {
        //handle success
        console.log(response);
        console.log("Data:", response.data);
        setReviewsFromDb(response.data);
        //this.setState({ reviewsFromDb: response.data });
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, [dummy]);

  const getProductImage = (productId) => {
    let allProducts = require("../services/allProducts.json");
    let filteredProduct = allProducts.filter(
      (product) => product.prodId == productId
    );
    //console.log("img", filteredProduct[0]);
    return images[filteredProduct[0].img];
  };

  function getIndividualUrl(site) {
    if (site === "Tutor_Away") {
      return "https://sushmitha-93.github.io/TutorAway-React-PHP-app/";
    } else if (site === "Freeze") {
      return "https://sushmitha-93.github.io/TutorAway-React-PHP-app/";
    } else if (site === "Need_to_learn") {
      return "https://sushmitha-93.github.io/TutorAway-React-PHP-app/";
    } else {
      return "https://sushmitha-93.github.io/TutorAway-React-PHP-app/";
    }
  }

  function getImageSize(site) {
    if (site === "Tutor_Away") {
      return 500;
    } else if (site === "Freeze") {
      return 300;
    } else if (site === "Need_to_learn") {
      return 500;
    } else {
      return 300;
    }
  }

  function handleSubmit(userReview, userRating) {
    if (!userId) {
      toast.error("Please login or register first to submit a review.", {
        position: "top-center",
      });
      return;
    }
    console.log(userReview);
    console.log(userRating);

    const review = {
      prodId: prodId,
      prodName: prodName,
      site: site,
      userId: userId,
      userName: userName,
      review: userReview,
      rating: userRating,
    };
    let formData = new FormData();
    formData.append("prodId", review.prodId);
    formData.append("prodName", review.prodName);
    formData.append("site", review.site);
    formData.append("userId", review.userId);
    formData.append("userName", review.userName);
    formData.append("review", review.review);
    formData.append("rating", review.rating);

    const url =
      "https://tutorawayphpbackend.000webhostapp.com/createMarketProdReview.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {
        //handle success
        console.log(response);
        console.log("Data:", response.data);
        setDummy(!dummy);
        //window.location.reload();
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <Fragment>
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <Image
              width={getImageSize(site)}
              src={getProductImage(prodId)}
              alt=""
            />
            <h1 class="display-5 fw-bold">{prodName}</h1>
            <p class="col-md-8 fs-4">
              For more details and information, please checkout the below
            </p>
            <a target="_blank" href={getIndividualUrl(site)}>
              <button class="btn btn-primary btn-lg" type="button">
                Go to {site}
              </button>
            </a>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <br />
            <h3 className="text-center">Reviews</h3>
            <br />
          </div>
        </div>
        <h4>User Reviews for "{prodName}": </h4>
        <br />
        <WriteReview handleSubmit={handleSubmit} />
        <br />
        <br />
        {reviewsFromDb.length > 0 &&
          reviewsFromDb.map((review) => (
            <>
              <div class="card col-md-8">
                <div class="card-body">
                  <h6 class="card-title">
                    <FaUserCircle /> {review.userName}
                  </h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Rating: {review.rating}
                  </h6>
                  <p class="card-text">{review.review}</p>
                </div>
              </div>
              <br />
            </>
          ))}
      </div>
    </Fragment>
  );
}
