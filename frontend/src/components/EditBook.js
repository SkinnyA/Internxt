import React from "react";
import { Modal } from "react-bootstrap";

const EditBook = ({activeItemDesc, activeItemName, handleClose, open}) => {
  return (
    <Modal show={open} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
            <Modal.Title>{activeItemName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{activeItemDesc}</Modal.Body>
    </Modal>
  );
};

export default EditBook;