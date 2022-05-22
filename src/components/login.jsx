import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Image, Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleFormDataChange = (event) => {
    setSigninForm({ ...signinForm, [event.target.name]: event.target.value });
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("email", signinForm.email);
    formData.append("password", signinForm.password);

    const url =
      "https://tutorawayphpbackend.000webhostapp.com/authenticate1.php";
    //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          if (response.data !== "") {
            localStorage.setItem("userId", response.data.id);
            localStorage.setItem("userName", response.data.firstName);
            localStorage.removeItem("lastVisitedProducts");
            if (
              signinForm.email === "admin@gmail.com" &&
              signinForm.password === "password"
            ) {
              localStorage.setItem("isAdmin", true);
              navigate("/");
            } else {
              toast.success("Welcome", { position: "top-center" });
              navigate("/");
            }
            window.location.reload();
          } else {
            toast.error("Invalid Credentials. Please try again!", {
              position: "top-center",
            });
          }
        } else {
          toast.error("Error occurred. Please try later!", {
            position: "top-center",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Error occurred. Please try later!", {
          position: "top-center",
        });
      });
  };

  return (
    <Fragment>
      <h4
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: 15,
          textAlign: "center",
        }}
      >
        Please login below
      </h4>
      <Card
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <Card.Body>
          <Form onSubmit={(e) => loginSubmit(e)}>
            <Card.Text>
              <Row style={{ margin: 15 }}>
                <Col sm={5}>Email</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="email"
                      value={signinForm.email}
                      onChange={(e) => handleFormDataChange(e)}
                      autoFocus
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row style={{ margin: 15 }}>
                <Col sm={5}>Password</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      value={signinForm.password}
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Text>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              type="submit"
              className="rounded-pill"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
