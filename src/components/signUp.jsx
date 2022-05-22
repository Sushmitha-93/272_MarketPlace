import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp(props) {
  const [userProfileForm, setUserProfileForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    homeAddress: "",
    homePhone: "",
    cellPhone: "",
  });
  const navigate = useNavigate();

  const createUser = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("firstName", userProfileForm.firstName);
    formData.append("lastName", userProfileForm.lastName);
    formData.append("email", userProfileForm.email);
    formData.append("password", userProfileForm.password);
    formData.append("homeAddress", userProfileForm.homeAddress);
    formData.append("homePhone", userProfileForm.homePhone);
    formData.append("cellPhone", userProfileForm.cellPhone);

    //const url = "http://localhost/createUser.php";
    const url = "https://tutorawayphpbackend.000webhostapp.com/signupUser.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          toast.success("Created user successfully!", {
            position: "top-center",
          });
          navigate("/");
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

  const handleFormDataChange = (event) => {
    setUserProfileForm({
      ...userProfileForm,
      [event.target.name]: event.target.value,
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
        Register to our marketplace
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
          <Form onSubmit={(e) => createUser(e)}>
            <Card.Text>
              <Row style={{ margin: 15 }}>
                <Col sm={5}>First Name</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={userProfileForm.firstName}
                      onChange={(e) => handleFormDataChange(e)}
                      required
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row style={{ margin: 15 }}>
                <Col sm={5}>Last Name</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={userProfileForm.lastName}
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row style={{ margin: 15 }}>
                <Col sm={5}>Email</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="email"
                      value={userProfileForm.email}
                      onChange={(e) => handleFormDataChange(e)}
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
                      value={userProfileForm.password}
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row style={{ margin: 15 }}>
                <Col sm={5}>Home Address</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="homeAddress"
                      value={userProfileForm.homeAddress}
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row style={{ margin: 15 }}>
                <Col sm={5}>Home Phone</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="homePhone"
                      value={userProfileForm.homePhone}
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row style={{ margin: 15 }}>
                <Col sm={5}>Cell Phone</Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="cellPhone"
                      value={userProfileForm.cellPhone}
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
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
