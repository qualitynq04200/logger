import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import CardModal from "../components/CardModal";

function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Card 1",
      content: "This is an example card.",
    },
    {
      id: 2,
      title: "Card 2",
      content: "Same with this one.",
    },
    {
      id: 3,
      title: "Card 3",
      content: "Still going....",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardBody, setNewCardBody] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleEditClick = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId);
    if (selectedCard) {
      setSelectedCardId(cardId);
      setNewCardTitle(selectedCard.title);
      setNewCardBody(selectedCard.content);
      setShowModal(true);
    }
  };

  const handleDeleteClick = (cardId) => {
    console.log(`Delete card with ID: ${cardId}`);
  };

  const handleAddCard = () => {
    if (selectedCardId) {
      // Editing existing card
      const updatedCards = cards.map((card) => {
        if (card.id === selectedCardId) {
          return {
            ...card,
            title: newCardTitle,
            content: newCardBody,
          };
        }
        return card;
      });
      setCards(updatedCards);
    } else {
      // Adding new card
      const newCard = {
        id: cards.length + 1,
        title: newCardTitle,
        content: newCardBody,
      };
      setCards([...cards, newCard]);
    }
    setShowModal(false);
    setNewCardTitle("");
    setNewCardBody("");
    setSelectedCardId(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewCardTitle("");
    setNewCardBody("");
    setSelectedCardId(null);
  };

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase()) ||
      card.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form className="flex-grow-1">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchChange}
          />
        </Form>
        <Button variant="primary" className="ml-3" onClick={() => setShowModal(true)}>
          Add Card
        </Button>
      </div>
      {cards.length === 0 ? (
        <Row>
          <Col>
            <p>No cards available.</p>
          </Col>
        </Row>
      ) : filteredCards.length === 0 ? (
        <Row>
          <Col>
            <p>No matching cards found.</p>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            {filteredCards.map((card) => (
              <Card key={card.id} className="mb-3">
                <Card.Header>
                  <div className="d-flex justify-content-between">
                    <Card.Title>{card.title}</Card.Title>
                    <div>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleEditClick(card.id)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteClick(card.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{card.content}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      )}

      <CardModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        newCardTitle={newCardTitle}
        setNewCardTitle={setNewCardTitle}
        newCardBody={newCardBody}
        setNewCardBody={setNewCardBody}
        handleAddCard={handleAddCard}
        selectedCardId={selectedCardId}
      />
      
    </Container>
  );
}

export default Dashboard;
