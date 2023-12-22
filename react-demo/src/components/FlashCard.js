import React, { useState } from 'react';
import '../style/flashCardStyles.css';

const FlashCard = ({ frontContent, backContent }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [lastModified, setLastModified] = useState(new Date());
  const [cardStatus, setCardStatus] = useState(''); 
  const handleClick = () => {
    setFlipped(!isFlipped);
    setLastModified(new Date());
  };

  const handleStatusChange = (newStatus) => {
    setCardStatus(newStatus);
    setLastModified(new Date());
  };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-side front">
        {frontContent}
        <p>Last Modified: {lastModified.toLocaleString()}</p>
      </div>
      <div className="card-side back">
        {backContent}
        <p>Last Modified: {lastModified.toLocaleString()}</p>
        <div className="status-buttons">
          <button onClick={() => handleStatusChange('Learned')}>Learned</button>
          <button onClick={() => handleStatusChange('Want to Learn')}>Want to Learn</button>
          <button onClick={() => handleStatusChange('Noted')}>Noted</button>
        </div>
        <p>Status: {cardStatus}</p>
      </div>
    </div>
  );
};

export default FlashCard;