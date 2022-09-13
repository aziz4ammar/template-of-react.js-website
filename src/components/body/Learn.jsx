import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Learn = ({el}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
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
                value={el.pr}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Population</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                value={el.pop}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Covered area</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                value={el.cav}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Year</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                value={el.year}
              />
            </InputGroup>
          <InputGroup className="mb-3">
              <InputGroup.Text>Source link</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                value={el.src}
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

export default Learn;