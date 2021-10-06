import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';

function PinBoard() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts(prev => [thought, ...prev])
  }

  const removeThought = (thoughtIdToRemove) => {
      setThoughts(prev => prev.filter(thought => (thought.id !== thoughtIdToRemove )))
  }

  return (
    <div className="PinBoard">
      <header className="staffthoughts">
        <h1>STAFF THOUGHTS</h1>
      </header>
      <main>
      <AddThoughtForm addThought={addThought}/>
      <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
    
      </main>
    </div>
  );
}

export default PinBoard;