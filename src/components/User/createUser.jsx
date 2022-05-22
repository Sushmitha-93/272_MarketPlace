import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {};

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit() called");

    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
    };

    console.log(user);

    // Sending datain formdata object so that it can be coded easily in php side
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("city", user.city);
    formData.append("phone", user.phone);

    //const url = "http://localhost:3000/createUser.php";
    // const url = "https://tutorawayphp.azurewebsites.net/createUser.php";
    const url = "https://tutorawayphpbackend.000webhostapp.com/createUser.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        console.log(response.data);

        if (response.status == 200) alert("User inserted Successfully");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-4">
          <br />
          <h1 className="text-center">Create New User</h1>
          <br />
          <div class="card">
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="mb-3 row">
                  <label for="name" class="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="email" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="city" class="col-sm-2 col-form-label">
                    City
                  </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="city" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="phone" class="col-sm-2 col-form-label">
                    Phone
                  </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="phone" />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Create User
                </button>
              </form>
            </div>
          </div>
          {/* <br />
          <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div> */}
        </div>
      </div>
    );
  }
}

export default CreateUser;
