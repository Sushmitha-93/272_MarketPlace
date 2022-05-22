import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import LastVisitedProducts from "./components/LastVisitedProducts";
import TopRatedProducts from "./components/TopRatedProducts";
import Contacts from "./components/contacts";
import Login from "./components/login";
import CreateUser from "./components/User/createUser";
import SearchUser from "./components/User/searchUser";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core"; // 'npm i @popper/core' and import jquery dependency otherwise features such as dropdown or toggle doesnt work
import "bootstrap/dist/js/bootstrap.bundle.min";

import ListOtherUsers from "./components/User/listOtherUsers";
import Reviews from "./components/reviews";
import SignUp from "./components/signUp";
import { toast } from "react-toastify";

function App() {
  toast.configure();
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/lastvisitedproducts" element={<LastVisitedProducts />} />
        <Route path="/topratedproducts" element={<TopRatedProducts />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/searchuser" element={<SearchUser />} />
        <Route path="/listOtherUsers" element={<ListOtherUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
