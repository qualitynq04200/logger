import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const CardModal = ({
  showModal,
  handleCloseModal,
  newCardTitle,
  setNewCardTitle,
  newCardBody,
  setNewCardBody,
  handleAddCard,
  selectedCardId,
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedCardId ? "Edit Card" : "Add Card"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="newCardTitle">
          <Form.Label>Card Title</Form.Label>
          <Form.Control
            type="text"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="newCardBody">
          <Form.Label>Card Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={newCardBody}
            onChange={(e) => setNewCardBody(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddCard}>
          {selectedCardId ? "Save Changes" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
