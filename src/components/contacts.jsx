import React, { Component } from "react";
import axios from "axios";
import { BsFillTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";

class Contacts extends Component {
  state = {
    contacts: {},
  };
  componentDidMount() {
    //const url = "https://contacts--php.herokuapp.com/"; // For production
    //const url = "http://localhost:3000/index.php";
    //const url = "https://tutorawayphp.azurewebsites.net/";
    const url = "https://tutorawayphpbackend.000webhostapp.com/";

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ contacts: data });
        console.log(this.state.contacts);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <br />
          <h1 className="text-center">Contact Us</h1>
          <br />

          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Contact Information</h5>
                      <p class="card-text">
                        Fill up the form and we will get back to you within 24
                        hours.
                      </p>
                      <br />
                      <p>
                        <BsFillTelephoneFill />
                        {this.state.contacts.phone}
                      </p>
                      <p>
                        <IoMailSharp /> {this.state.contacts.email}
                      </p>
                      <p>
                        <IoLocationSharp /> {this.state.contacts.location}
                      </p>
                      <p>
                        <BsFillClockFill /> Mon-Fri 10AM - 8PM
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Write to us...</h5>
                      <br />
                      <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div class="mb-3">
                          <label
                            for="exampleFormControlTextarea1"
                            class="form-label"
                          >
                            Message
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            placeholder="Write your message..."
                            rows="3"
                          ></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
