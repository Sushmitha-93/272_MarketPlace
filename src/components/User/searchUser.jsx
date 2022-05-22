import React, { Component } from "react";
import axios from "axios";

class SearchUser extends Component {
  state = {
    rows: [],
    cols: [
      { label: "userid", path: "userid" },
      { label: "name", path: "name" },
      { label: "email", path: "email" },
      { label: "city", path: "city" },
      { label: "phone", path: "phone" },
    ],
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit() called");

    const user = {
      userid: e.target.userid.value,
      name: e.target.name.value,
      email: e.target.email.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
    };

    console.log(user);

    // Sending datain formdata object so that it can be coded easily in php side
    let formData = new FormData();
    formData.append("userid", user.userid);
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("city", user.city);
    formData.append("phone", user.phone);

    //const url = "http://localhost:3000/searchUser.php";
    //const url = "https://tutorawayphp.azurewebsites.net/searchUser.php";
    const url = "https://tutorawayphpbackend.000webhostapp.com/searchUser.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {
        //handle success
        console.log(response);
        console.log(response.data);
        this.setState({ rows: response.data });
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    const rows = this.state.rows;
    const cols = this.state.cols;

    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <br />
          <h1 className="text-center">Search User</h1>
          <br />
          <div className="card">
            <div className="card-body ">
              <form
                class="row gx-3 gy-2 align-items-center"
                onSubmit={this.handleSubmit}
              >
                <div class="col-sm">
                  <label class="visually-hidden" for="userid">
                    User id
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="userid"
                    placeholder="ID"
                  />
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="email">
                    email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div class="col-sm-2">
                  <label class="visually-hidden" for="city">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    placeholder="Enter City"
                  />
                </div>
                <div class="col-sm-2">
                  <label class="visually-hidden" for="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Enter Phone"
                  />
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*Card ends */}
          <p>Search with any field...</p>
          <br />
          {rows.length > 0 && (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">User ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr>
                    {cols.map((col) => (
                      <td>{row[col.path]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default SearchUser;
