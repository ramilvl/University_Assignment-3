import React, { useState } from 'react';
import './style/flashCardStyles.css';

const EditableFlashCard = ({ frontContent, backContent, onDelete, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedFrontContent, setUpdatedFrontContent] = useState(frontContent);
  const [updatedBackContent, setUpdatedBackContent] = useState(backContent);
  const [lastModified, setLastModified] = useState(new Date());

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(updatedFrontContent, updatedBackContent);
    setLastModified(new Date());
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdatedFrontContent(frontContent);
    setUpdatedBackContent(backContent);
  };

  return (
    <div className="flash-card" onMouseEnter={() => setEditing(true)} onMouseLeave={() => setEditing(false)}>
      {isEditing ? (
        <div className="edit-buttons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete()}>Delete</button>
        </div>
      ) : null}
      <div className={`card-side front ${isEditing ? 'editable' : ''}`}>
        {isEditing ? (
          <input
            type="text"
            value={updatedFrontContent}
            onChange={(e) => setUpdatedFrontContent(e.target.value)}
          />
        ) : (
          <div>
            {frontContent}
            <p>Last Modified: {lastModified.toLocaleString()}</p>
          </div>
        )}
      </div>
      <div className={`card-side back ${isEditing ? 'editable' : ''}`}>
        {isEditing ? (
          <input
            type="text"
            value={updatedBackContent}
            onChange={(e) => setUpdatedBackContent(e.target.value)}
          />
        ) : (
          <div>
            {backContent}
            <p>Last Modified: {lastModified.toLocaleString()}</p>
          </div>
        )}
        {isEditing && (
          <div className="edit-button">
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditableFlashCard;
