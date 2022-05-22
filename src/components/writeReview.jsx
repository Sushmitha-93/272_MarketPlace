import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const WriteReview = ({ handleSubmit }) => {
  function handleSubmit1(e) {
    e.preventDefault();
    let review = e.target.review.value;
    let rating = e.target.rating.value;

    handleSubmit(review, rating);
    e.target.review.value = "";
    e.target.rating.value = "";
  }
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Write Review
      </button>
      {/* <!-- Modal --> */}

      {/* <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Write Review</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => handleFormDataChange(e)}
                placeholder="Enter your email"
                autoFocus
                required
              />
              <p style={{ color: "red" }}>{validationErrors.email?.msg}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => handleFormDataChange(e)}
                placeholder="Enter your Password"
                required
              />
              <p style={{ color: "red" }}>{validationErrors.password?.msg}</p>
            </Form.Group>
            <Button variant="primary" type="submit" className="rounded-pill">
              Sign in
            </Button>
          </Form>
        </Modal.Body>
      </Modal> */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <form style={{ width: "500px" }} onSubmit={handleSubmit1}>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Write Review
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="review" class="form-label">
                    Write review:
                  </label>
                  <textarea
                    class="form-control"
                    id="review"
                    rows="3"
                  ></textarea>
                </div>
                <div class="col-sm-4">
                  <label for="rating" class="form-label">
                    Enter rating / 5:
                  </label>
                  <input
                    class="form-control"
                    id="rating"
                    type="text"
                    placeholder="Enter Rating / 5"
                  ></input>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteReview;
