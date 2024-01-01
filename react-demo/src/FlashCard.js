import React, { useState } from 'react';
import FlashCard from './FlashCard';

const FlashCardPage = () => {
  const initialFlashCards = [
    {
      id: 1,
      frontContent: 'What is the capital of France?',
      backContent: 'Paris',
    },
    {
      id: 2,
      frontContent: 'Who wrote "Romeo and Juliet"?',
      backContent: 'William Shakespeare',
    },
  ];

  const [flashCards, setFlashCards] = useState(initialFlashCards);

  const handleCardStatusChange = (cardId, newStatus) => {
    setFlashCards((prevFlashCards) =>
      prevFlashCards.map((card) =>
        card.id === cardId ? { ...card, cardStatus: newStatus, lastModified: new Date() } : card
      )
    );
  };

  return (
    <div className="flash-card-page">
      <h2>Flash Card Page</h2>
      <div className="flash-cards-container">
        {flashCards.map((card) => (
          <FlashCard
            key={card.id}
            frontContent={card.frontContent}
            backContent={card.backContent}
            lastModified={card.lastModified}
            cardStatus={card.cardStatus}
            onStatusChange={(newStatus) => handleCardStatusChange(card.id, newStatus)}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashCardPage;
