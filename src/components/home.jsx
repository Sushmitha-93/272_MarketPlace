import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <div class="container py-4">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Welcome to the Market Place!</h1>
              <p class="col-md-12 fs-4">
                Explore our thousands of products on tons of categories and have
                some fun! Get access to numerous products!
                <br /> Our Marketplace has different products from Tutor Away,
                Freeze, Need to Learn and the Coffee Culture
              </p>
              <Link to="/services">
                <button class="btn btn-primary btn-lg" type="button">
                  Explore our Marketplace!
                </button>
              </Link>
            </div>
          </div>

          <div class="row align-items-md-stretch">
            <div class="col-md-6">
              <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Check out TutorAway!</h2>
                <p>
                  Get access to numerous free courses, check out course library{" "}
                  <br /> Get live class experince with home works | Register to
                  live classes |
                  <br /> Learn new things & Stay updated !!
                </p>
                <a
                  target="_blank"
                  href="https://sushmitha-93.github.io/TutorAway-React-PHP-app/"
                >
                  <button class="btn btn-outline-light" type="button">
                    Visit TutorAway site
                  </button>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 bg-light border rounded-3">
                <h2>Check out Freeze!</h2>
                <p>
                  Are you an ice-cream lover? Do you love desserts? <br />{" "}
                  Checkout our different and unique flavours from our website
                  <br /> We have specials from each season as well. Do check
                  them out
                </p>
                <a
                  target="_blank"
                  href="https://hardcoresam.github.io/CMPE-272-Marketplace/"
                >
                  <button class="btn btn-outline-secondary" type="button">
                    Visit Freeze site!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row align-items-md-stretch">
            <div class="col-md-6">
              <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Check out Need To Learn!</h2>
                <p>
                  Learn numerous free courses, and excel at them <br /> Online
                  coaching will be provided to everyone who registers | Register
                  to live classes |
                  <br /> Explore new things & Stay updated !!
                </p>
                <button class="btn btn-outline-light" type="button">
                  Visit Need to Learn site!
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 bg-light border rounded-3">
                <h2>Check out Coffee Culture!</h2>
                <p>
                  Are you a Coffee Lover? Do you love to drink coffee in the
                  mornings? <br /> Come checkout our unique flavours of coffee
                  which will make you refreshing <br /> Drink Coffee. Chill out.
                </p>
                <button class="btn btn-outline-secondary" type="button">
                  Visit Coffee Culture site!
                </button>
              </div>
            </div>
          </div>

          <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
        </div>
      </main>
    );
  }
}

export default Home;
