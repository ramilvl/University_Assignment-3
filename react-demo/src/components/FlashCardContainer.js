import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';

const MyFlashCardContainer = () => {
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    fetch('/path/to/db.json') 
      .then((response) => response.json())
      .then((data) => setFlashCards(data.flashCards))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flash-card-container">
      {flashCards.map((card, index) => (
        <FlashCard key={index} frontContent={card.frontContent} backContent={card.backContent} />
      ))}
    </div>
  );
};

export default MyFlashCardContainer;