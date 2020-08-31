import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const EditBook = ({activeItemDesc, activeItemName, activeItemId, handleClose, open}) => {
  return (
    <Modal show={open} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
            <Modal.Title>{activeItemName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{activeItemDesc}</Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
    </Modal>
  );
};

export default EditBook;
