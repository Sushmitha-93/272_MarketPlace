import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function TopRatedProducts(props) {
  const [marketPlaceProducts, setmarketPlaceProducts] = useState([]);
  const [tutorAwayProducts, setTutorAwayProducts] = useState([]);
  const [freezeProducts, setFreezeProducts] = useState([]);
  const [apparelStoreProducts, setApparelStoreProducts] = useState([]);
  const [coffeeCulture, setCoffeeCulture] = useState([]);

  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

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

    //Tutor away
    let formData1 = new FormData();
    formData1.append("site", "Tutor_Away");

    const url1 =
      "https://tutorawayphpbackend.000webhostapp.com/getTopProducts.php";
    //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

    axios({
      method: "post",
      url: url1,
      data: formData1,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setTutorAwayProducts(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    //Freeze
    let formData2 = new FormData();
    formData2.append("site", "Freeze");

    const url2 =
      "https://tutorawayphpbackend.000webhostapp.com/getTopProducts.php";
    //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

    axios({
      method: "post",
      url: url2,
      data: formData2,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setFreezeProducts(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    let formData3 = new FormData();
    formData3.append("site", "Need_to_learn");

    const url3 =
      "https://tutorawayphpbackend.000webhostapp.com/getTopProducts.php";
    //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

    axios({
      method: "post",
      url: url3,
      data: formData3,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setApparelStoreProducts(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    let formData4 = new FormData();
    formData4.append("site", "coffeeculture");

    const url4 =
      "https://tutorawayphpbackend.000webhostapp.com/getTopProducts.php";
    //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

    axios({
      method: "post",
      url: url4,
      data: formData4,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setCoffeeCulture(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    let formData5 = new FormData();
    formData5.append("site", "");

    const url5 =
      "https://tutorawayphpbackend.000webhostapp.com/getTopProducts.php";
    //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

    axios({
      method: "post",
      url: url5,
      data: formData5,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setmarketPlaceProducts(response.data);
          setCardsToDisplay(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const getProduct = (productId) => {
    let allProducts = require("../services/allProducts.json");
    let filteredProduct = allProducts.filter(
      (product) => product.prodId == productId
    );
    return filteredProduct[0];
    //return images[filteredProduct[0].img];
  };

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

  const handleTabSelect = (tab) => {
    console.log("Tab selected: ", tab);
    if (tab == "marketplace") {
      setCardsToDisplay(marketPlaceProducts);
    }

    if (tab == "Tutor_Away") {
      setCardsToDisplay(tutorAwayProducts);
    }

    if (tab == "Freeze") {
      setCardsToDisplay(freezeProducts);
    }

    if (tab == "Apparel Store") {
      setCardsToDisplay(apparelStoreProducts);
    }

    if (tab == "Coffee Culture") {
      setCardsToDisplay(coffeeCulture);
    }
  };

  return (
    <div className="container py-3">
      <header>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Top Products</h1>
          <p className="fs-5 text-muted">
            We have access to all the top products from TutorAway, Freeze, Need
            to Learn, Coffee Culture and from the entire Marketplace
          </p>
        </div>
      </header>

      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-all-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-all"
            type="button"
            role="tab"
            aria-controls="nav-all"
            aria-selected="true"
            onClick={() => handleTabSelect("marketplace")}
          >
            Entire Marketplace
          </button>
          <button
            class="nav-link"
            id="nav-previsolyVisited-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-previsolyVisited"
            type="button"
            role="tab"
            aria-controls="nav-previsolyVisited"
            aria-selected="false"
            onClick={() => handleTabSelect("Tutor_Away")}
          >
            Tutor Away
          </button>
          <button
            class="nav-link"
            id="nav-top5courses-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-top5courses"
            type="button"
            role="tab"
            aria-controls="nav-top5courses"
            aria-selected="false"
            onClick={() => handleTabSelect("Freeze")}
          >
            Freeze
          </button>
          <button
            class="nav-link"
            id="nav-previsolyVisited-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-previsolyVisited"
            type="button"
            role="tab"
            aria-controls="nav-previsolyVisited"
            aria-selected="false"
            onClick={() => handleTabSelect("Apparel Store")}
          >
            Need to Learn
          </button>
          <button
            class="nav-link"
            id="nav-previsolyVisited-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-previsolyVisited"
            type="button"
            role="tab"
            aria-controls="nav-previsolyVisited"
            aria-selected="false"
            onClick={() => handleTabSelect("Coffee Culture")}
          >
            Coffee Culture
          </button>
        </div>
      </nav>

      <br />

      <main>
        <div className="row row-cols-3 row-cols-md-4 mb-3 gy-5 text-center">
          {cardsToDisplay.map((product) => (
            <div className="col">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={images[getProduct(product.prodId).img]}
                  alt="Card image cap"
                />
                <div className="card-body ">
                  <h5 className="card-title">{product.prodName}</h5>
                  <p className="card-text">
                    Average Rating:{" "}
                    {Math.round(product.averagerating * 100) / 100}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
