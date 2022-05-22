import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LastVisitedProducts(props) {
  const [productIds, setProductIds] = useState([]);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  useEffect(() => {
    async function fetchLastVisitedProducts() {
      let lastVisitedProducts = JSON.parse(
        localStorage.getItem("lastVisitedProducts")
      );
      console.log("last visited products :", lastVisitedProducts);
      console.log(typeof lastVisitedProducts[0]);
      setProductIds(lastVisitedProducts);
    }
    fetchLastVisitedProducts();
    const images = importAll(
      require.context("../img", false, /\.(png|jpe?g|svg)$/)
    );
    setImages(images);
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

  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <br />
          <h2 className="text-center">
            Last Visited Products in the whole marketplace
          </h2>
          <br />
        </div>
      </div>

      <div className="container py-3">
        <main>
          <div className="row row-cols-3 row-cols-md-4 mb-3 gy-5 text-center">
            {productIds.length > 0 &&
              productIds.map((productId) => (
                <div className="col">
                  <div className="card">
                    <Image
                      className="card-img-top"
                      src={images[getProduct(productId).img]}
                      alt="Card image cap"
                    />
                    <div className="card-body ">
                      <h5 className="card-title">
                        {getProduct(productId).prodName}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>

      {/* <div id="page">
        <div id="body">
          <div class="header">
            <div>
              <h1>Last visited products</h1>
            </div>
          </div>
          <div>
            {(!productIds || productIds.length === 0) && (
              <div
                style={{
                  marginLeft: "15%",
                  marginRight: "15%",
                  textAlign: "center",
                }}
              >
                <h2>Haven't visited any products yet.</h2>
              </div>
            )}
            <div className="row row-cols-3 row-cols-md-4 mb-3 gy-5 text-center">
              {productIds.length > 0 &&
                productIds.map((productId) => (
                  <div className="col">
                    <div className="card h-100">
                      <Image
                        width={300}
                        src={images[getProduct(productId).img]}
                        alt=""
                      />
                      <h2>{getProduct(productId).prodName}</h2>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
}
