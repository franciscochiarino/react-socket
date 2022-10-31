import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect('http://localhost:3001');

function App() {
  const [deck, setDeck] = useState([]);
  const [instruction, setInstruction] = useState('');

  useEffect(() => {
    socket.on('receive_initial_deck', (deck) => {
      setInstruction('Go ahead');
      setDeck(deck);
    })

    if (!deck.length) {
      setInstruction('Wait for your turn');
    }
  }, [socket]);

  return (
    <div className="App">
      <h4>{instruction}</h4>
      <h3>{deck}</h3>
    </div>
  );
}

export default App;
