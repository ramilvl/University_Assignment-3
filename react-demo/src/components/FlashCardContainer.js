import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';

const FlashCardContainer = () => {
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/path/to/db.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFlashCards(data.flashCards);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const updateCard = (id, updatedCard) => {
    setFlashCards((prevFlashCards) =>
      prevFlashCards.map((card) => (card.id === id ? updatedCard : card))
    );
  };

  return (
    <div className="flash-card-container">
      {flashCards.map((card) => (
        <FlashCard
          key={card.id}
          id={card.id}
          frontContent={card.frontContent}
          backContent={card.backContent}
          onUpdateCard={updateCard}
        />
      ))}
    </div>
  );
};

export default FlashCardContainer;
