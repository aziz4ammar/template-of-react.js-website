import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Ottawa = ({el}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const [name, setName] = useState(el.name);
//   const [image, setImage] = useState(el.image);
//   const [rating, setRating] = useState(el.rating);
//   const [date, setdate] = useState(el.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedMovie = {
      id: el.id,
    //   name,
    //   image,
    //   rate,
    //   date,
    };
    // edit(editedMovie);
    handleClose();
  };
  return (
    <div>
      <Button className="but" variant="primary" onClick={handleShow}>
        Learn more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More About ❤{el.name}❤</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text>Province</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                // value={image}
                // onChange={(e) => setImage(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Rating</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                // value={rating}
                // onChange={(e) => setRating(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Year</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                // value={date}
                // onChange={(e) => setdate(e.target.value)}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Ottawa;