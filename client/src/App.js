import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect('http://localhost:3001');

function App() {
  const [turn, setTurn] = useState(true);
  const [deck, setDeck] = useState([]);

  const drawCard = () => {
    deck.pop();

    socket.emit('send_deck', deck);
    setTurn(false);
  }

  useEffect(() => {
    socket.on('receive_initial_deck', (deck) => {
      setDeck(deck);
      setTurn(true);
    })

    socket.on('receive_deck', deck => {
      setDeck(deck);
      setTurn(true);
    })

    if (!deck.length) {
      setTurn(false)
    }
  }, [socket]);

  return (
    <div className="App">
      <h4>{turn ? 'Go ahead' : 'Wait for your turn'}</h4>
      {console.log(turn)}
      <h3>{turn && deck}</h3>
      <button onClick={drawCard} disabled={!turn}>Draw card</button>
    </div>
  );
}

export default App;
