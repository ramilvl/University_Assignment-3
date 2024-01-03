import React from 'react';

const FlashCardForm = ({ newCard, setNewCard, handleAddCard }) => {
  return (
    <div className="flash-card-1">
      <h3>Add New Flash Card</h3>

      <div>
        <input type="text" className="front-flsh" placeholder="Front Side" id="frontInput" value={newCard.front} onChange={(e) => setNewCard({ ...newCard, front: e.target.value })} />
      </div>

      <div>
        <input type="text" id="backInput" className="back-flsh" placeholder="Back Side" value={newCard.back} onChange={(e) => setNewCard({ ...newCard, back: e.target.value })} />
      </div>

      <div>
        <select value={newCard.status} onChange={(e) => setNewCard({ ...newCard, status: e.target.value })}>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>
      </div>

      <button className="btn-add" onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default FlashCardForm;
