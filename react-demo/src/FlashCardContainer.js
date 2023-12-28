import React, { useState } from 'react';
import FlashCard from './FlashCard';
import EditableFlashCard from './EditableFlashCard';

const MyFlashCardContainer = () => {
  const [cards, setCards] = useState([
    { id: 1, frontContent: 'Question 1', backContent: 'Answer 1' },
    { id: 2, frontContent: 'Question 2', backContent: 'Answer 2' },
  ]);

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleUpdate = (id, updatedFrontContent, updatedBackContent) => {
    const updatedCards = cards.map((card) =>
      card.id === id
        ? { ...card, frontContent: updatedFrontContent, backContent: updatedBackContent }
        : card
    );
    setCards(updatedCards);
  };

  return (
    <div className="flash-card-container">
      {cards.map((card) => (
        <EditableFlashCard
          key={card.id}
          frontContent={card.frontContent}
          backContent={card.backContent}
          onDelete={() => handleDelete(card.id)}
          onUpdate={(front, back) => handleUpdate(card.id, front, back)}
        />
      ))}
    </div>
  );
};

export default MyFlashCardContainer;
