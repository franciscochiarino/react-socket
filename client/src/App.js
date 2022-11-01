import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Room from './Room';

function App() {
  const [socket, setSocket] = useState(null);

  // const [turn, setTurn] = useState(true);
  // const [deck, setDeck] = useState([]);

  // const drawCard = () => {
  //   deck.pop();

  //   socket.emit('send_deck', deck);
  //   setTurn(false);
  // }

  // const shuffleDeck = () => {
  //   deck.sort(() => 0.5 - Math.random());

  //   socket.emit('send_deck', deck);
  //   setTurn(false);
  // }

  // useEffect(() => {
  //   socket.on('receive_initial_deck', (deck) => {
  //     setDeck(deck);
  //     setTurn(true);
  //   })

  //   socket.on('receive_deck', deck => {
  //     setDeck(deck);
  //     setTurn(true);
  //   })

  //   if (!deck.length) {
  //     setTurn(false)
  //   }
  // }, [socket]);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    newSocket.on('connect', (socket) => {
      console.log('socket connected', socket);
    })
    
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/room" element={<Room />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>

      {/* <h4>{turn ? 'Go ahead' : 'Wait for your turn'}</h4>
      {console.log(turn)}
      <h3>{turn && deck}</h3>
      <button onClick={drawCard} disabled={!turn}>Draw card</button>
      <button onClick={shuffleDeck} disabled={!turn}>Shuffle</button> */}
    </div>
  );
}

export default App;
