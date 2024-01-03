import React, { useState, useEffect } from 'react';
import FlashCardForm from './FlashCardForm';
import '../src/style/flashcard.css';

const FlashCard = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({ front: '', back: '', status: 'Want to Learn' });
  const [editableCard, setEditableCard] = useState(null);
  const [editedCard, setEditedCard] = useState({ front: '', back: '' });
  const [currentSides, setCurrentSides] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => {
        const sortedCards = data.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
        setCards(sortedCards);
        setCurrentSides(Object.fromEntries(sortedCards.map(card => [card.id, 'front'])));
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleStatusChange = (cardId, newStatus, event) => {
    event.stopPropagation();

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId ? { ...card, status: newStatus, lastModified: new Date() } : card
      )
    );

    fetch(`http://localhost:3000/cards/${cardId}`, {method: 'PATCH',headers: {'Content-Type': 'application/json',},body: JSON.stringify({ status: newStatus, lastModified: new Date() }),})
      .then(response => response.json())
      .then(data => console.log('Updated card on server:', data))
      .catch(error => console.error('Error:', error));
  };

  const handleAddCard = () => {
    const newCardObject = {
      id: Date.now(),
      front: newCard.front,
      back: newCard.back,
      status: newCard.status,
      lastModified: new Date(),
    };

    fetch('http://localhost:3000/cards', {method: 'POST',headers: {'Content-Type': 'application/json',},body: JSON.stringify(newCardObject),})
      .then(response => response.json())
      .then(data => console.log('Add new flash card:', data))
      .catch(error => console.error('Error:', error));

    setCards(prevCards => [...prevCards, newCardObject]);
    setNewCard({ front: '', back: '', status: 'Want to Learn' });
  };

  const handleEditCard = cardId => {
    const cardToEdit = cards.find(card => card.id === cardId);
    setEditableCard(cardId);
    setEditedCard({ front: cardToEdit.front, back: cardToEdit.back });
  };

  const handleSaveEdit = cardId => {
    const editedCardObject = {
      front: editedCard.front,
      back: editedCard.back,
      lastModified: new Date(),
    };

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId ? { ...card, ...editedCardObject } : card
      )
    );
    setEditableCard(null);

    fetch(`http://localhost:3000/cards/${cardId}`, {method: 'PATCH',headers: {'Content-Type': 'application/json',},body: JSON.stringify(editedCardObject),})
      .then(response => response.json())
      .then(data => console.log('Updated flash card:', data))
      .catch(error => console.error('Error:', error));
  };

  const handleDeleteCard = cardId => {
    fetch(`http://localhost:3000/cards/${cardId}`, {method: 'DELETE',headers: {'Content-Type': 'application/json',},})
      .then(response => response.json())
      .then(data => console.log('Deleted flash card successfully:', data))
      .catch(error => console.error('Error:', error));

    setCards(prevCards => prevCards.filter(card => card.id !== cardId));
  };

  const handleCardTouch = (cardId) => {
    setCurrentSides(prevSides => ({
      ...prevSides,
      [cardId]: prevSides[cardId] === 'front' ? 'back' : 'front',
    }));
  };

  return (
    <div className="flashcard-container">
      {cards.map(card => (
        <div key={card.id} className={`flash-card ${editableCard === card.id ? 'editable' : ''}`} onClick={() => handleCardTouch(card.id)}>
          <div className="card-inner" style={{ backgroundColor: currentSides[card.id] === 'back' ? '#cac6c6f8' : 'white' }}>
          <div>
            {editableCard === card.id ? (
              <input type="text" value={currentSides[card.id] === 'front' ? editedCard.front : editedCard.back} onChange={e => setEditedCard({...editedCard, [currentSides[card.id] === 'front' ? 'front' : 'back']: e.target.value,})}/>
            ):(currentSides[card.id] === 'front' ? <div className="frt-tx">{card.front}</div> : <div className="bck-txt">{card.back}</div>)}
          </div>
          <div className="flash-card-statuss">
            <b>Status:</b> {card.status}
          </div>
          <div className='flash-card-mod'>
            <b>Last Modified:</b> {new Date(card.lastModified).toLocaleString()}
          </div>
          {editableCard === card.id ? (
            <button onClick={() => handleSaveEdit(card.id)}>Save</button>
          ):(
            <div className='sttatus'>
              <button onClick={(event) => handleStatusChange(card.id, 'Learned', event)} className="status-learned">Learned</button>
              <button onClick={(event) => handleStatusChange(card.id, 'Want to Learn', event)} className="status-want-to-learn">Want to Learn</button>
              <button onClick={(event) => handleStatusChange(card.id, 'Noted', event)}className="status-noted">Noted</button>
              <div className="card-actions"><button onClick={() => handleEditCard(card.id)}>Edit</button><button onClick={() => handleDeleteCard(card.id)}>Delete</button></div>
            </div>
          )}
          </div>
        </div>
      ))}
      <FlashCardForm newCard={newCard} setNewCard={setNewCard} handleAddCard={handleAddCard} />
    </div>
  );
};

export default FlashCard;
