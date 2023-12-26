import React from 'react';
import FlashCard from './FlashCard';

const MyFlashCardContainer = () => {
  return (
    <div className="flash-card-container">
      <FlashCard frontContent="Question 1" backContent="Answer 1" />
      <FlashCard frontContent="Question 2" backContent="Answer 2" />
      {}
    </div>
  );
};

export default MyFlashCardContainer;