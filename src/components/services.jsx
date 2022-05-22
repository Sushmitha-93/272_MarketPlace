import React, { Component } from "react";
import { Link } from "react-router-dom";
import _, { intersection, toNumber } from "lodash";
import axios from "axios";

class Services extends Component {
  state = {
    images: [],
    cardsToRender: [],
    allCourses: [
      {
        prodId: 1,
        prodName: "Master React",

        img: "reactpic.jpg",
        tagline: "Understand React inside out and boost your career prospects",
        link: "/reactjsCourse",
      },
      {
        prodId: 2,
        prodName: "The Complete Node.Js Course",
        img: "nodejspic.jpg",
        tagline:
          "Learn to build highly-scalable, fast and secure RESTful APIs with Node, Express, and MongoDB.",
        link: "/nodejsCourse",
      },
      {
        prodId: 3,
        prodName: "Learn Vue.Js",
        img: "vuejs.png",
        tagline:
          "Vue is a newer and refreshing framework for building web apps with more ease than writing vanilla HTML",
        link: "/vuejsCourse",
      },
      {
        prodId: 4,
        prodName: "Learn Next.Js",
        img: "nextjs-thumb.png",
        tagline:
          "Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.",
        link: "/nextjsCourse",
      },
      {
        prodId: 5,
        prodName: "JavaScript Mastery Course",
        img: "jsimage.png",
        tagline:
          "Master the Fundamentals of JavaScript - The Language Behind Millions of Websites & Apps",
        link: "/javascriptCourse",
      },
      {
        prodId: 6,
        prodName: "Python Tutorial for Beginers",
        img: "pythonimage.png",
        tagline: "Everything you need to program in Python in one prodName ",
        link: "/pythonCourse",
      },
      {
        prodId: 7,
        prodName: "Mongo DB",
        img: "mongodb.png",
        tagline:
          "Learn Mongo DB online at your own pace. Start today and improve your skills",
        link: "/mongodbCourse",
      },

      {
        prodId: 8,
        prodName: "React Native Fundamentals",
        img: "reactnative.png",
        tagline:
          "Master the Fundamentals of Building Native Apps with React Native and Expo",
        link: "/reactnativeCourse",
      },
      {
        prodId: 9,
        prodName: "Machine Learning Crash Course",
        img: "machineLearning.png",
        tagline:
          "Analyze, Visualize Data and Build Machine Learning Models with Python ",
        link: "/mlCourse",
      },
      {
        prodId: 10,
        prodName: "Natural Language Processing",
        img: "nlp.png",
        tagline:
          "Explore Fundamental concepts of NLP and its role in current and emerging technologies through hands on exercises.",
        link: "/nlpCourse",
      },
    ],
    tutorAwayProds: [],
    freezeProds: [],
    apparelStoreProds: [],
    coffeeCultureProds: [],
  };

  componentDidMount() {
    // ********** To import multiple images *********//
    let tutorAway = require("../services/tutorAway.json");
    let freeze = require("../services/freeze.json");
    let santhoshProds = require("../services/santhosh.json");
    let naveenProds = require("../services/naveen.json");
    this.setState({
      tutorAwayProds: tutorAway,
      freezeProds: freeze,
      apparelStoreProds: santhoshProds,
      coffeeCultureProds: naveenProds,
    });
    function importAll(r) {
      let images = {};
      r.keys().map((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const images = importAll(
      require.context("../img", false, /\.(png|jpe?g|svg)$/)
    );

    this.setState({ cardsToRender: tutorAway, images: images });
    // ********************************************//
  }

  handleClick = (prodId) => {
    console.log("handleClick", prodId);
    if (localStorage.lastVisitedProducts) {
      let visitedProducts = JSON.parse(
        localStorage.getItem("lastVisitedProducts")
      );
      let index = visitedProducts.indexOf(prodId);
      if (index > -1) {
        visitedProducts.splice(index, 1);
      }
      visitedProducts.unshift(prodId);
      localStorage.lastVisitedProducts = JSON.stringify(
        visitedProducts.slice(0, 5)
      );
    } else {
      localStorage.lastVisitedProducts = JSON.stringify([prodId]);
    }
  };

  handleTabSelect = (tab) => {
    const allCourses = this.state.tutorAwayProds;
    const tutorAwayProds = this.state.tutorAwayProds;
    const freezeProds = this.state.freezeProds;
    const apparelStoreProds = this.state.apparelStoreProds;
    const coffeeCultureProds = this.state.coffeeCultureProds;

    console.log("Tab selected: ", tab);
    if (tab == "Tutor_Away") {
      this.setState({ cardsToRender: tutorAwayProds });
    }

    if (tab == "Freeze") {
      this.setState({ cardsToRender: freezeProds });
    }

    if (tab == "Need_to_learn") {
      this.setState({ cardsToRender: apparelStoreProds });
    }

    if (tab == "coffee_culture") {
      this.setState({ cardsToRender: coffeeCultureProds });
    }
  };

  render() {
    const cardsToRender = this.state.cardsToRender;
    console.log(cardsToRender);
    const images = this.state.images;

    return (
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Products Catalog</h1>
            <p className="fs-5 text-muted">
              We have access to products from TutorAway, Freeze, Need to Learn
              and Coffee Culture
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
              onClick={() => this.handleTabSelect("Tutor_Away")}
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
              onClick={() => this.handleTabSelect("Freeze")}
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
              onClick={() => this.handleTabSelect("Need_to_learn")}
            >
              Need to learn
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
              onClick={() => this.handleTabSelect("coffee_culture")}
            >
              Coffee Culture
            </button>
          </div>
        </nav>

        <br />

        <main>
          <div className="row row-cols-3 row-cols-md-4 mb-3 gy-5 text-center">
            {cardsToRender.map((card) => (
              <div className="col">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={images[card.img]}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <h5 className="card-title">{card.prodName}</h5>
                    <p className="card-text">{card.tagline}</p>
                  </div>
                  <div className="card-footer bg-transparent">
                    <Link
                      to={
                        "/reviews/?prodId=" +
                        card.prodId +
                        "&prodName=" +
                        card.prodName +
                        "&site=" +
                        card.site
                      }
                    >
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-primary"
                        onClick={() => this.handleClick(card.prodId)}
                      >
                        See more info
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img
                className="mb-2"
                src="../assets/brand/bootstrap-logo.svg"
                alt=""
                width="24"
                height="19"
              />
              <small className="d-block mb-3 text-muted">
                &copy; 2017–2021
              </small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Cool stuff
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Random feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Team feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Another one
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Resource name
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Another resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Team
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Locations
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Privacy
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Services;
