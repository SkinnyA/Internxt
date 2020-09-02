import React from "react";
import {  Modal, Form, Row, Col, Button  } from "react-bootstrap";

const ModalBook = ({activeItemDesc, activeItemName, activeItemId, handleCloseModalEdit, openModalEdit}) => {

  // When click submit, update book title and description
  const handleSubmit = (event) => {

    fetch(`http://localhost:8000/api/books/${activeItemId}`, {
      method: 'PUT',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        title: event.target.title.value,
        description: event.target.description.value
      })
    })
    .then(res => res.json())
    .then((result) =>{
      console.log(result)
    })
  }
  return (
    <Modal show={openModalEdit} onHide={handleCloseModalEdit} animation={false} centered>
            <Modal.Header closeButton className="bg-modal">
                <Modal.Title className="title-modal">Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body className="body-modal">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="title">
                                <Form.Label className="title-label">{activeItemName}</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="title"
                                    required
                                    placeholder="New Title"
                                />
                            </Form.Group>
                            <Form.Group controlId="desc">
                                <Form.Label className="desc-label">{activeItemDesc}</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="description"
                                    required
                                    placeholder="New Description"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit" className="update-button">
                                    Update Book
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
  );
};

export default ModalBook;
