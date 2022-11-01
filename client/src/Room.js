import React from 'react';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

export default function Room() {
  const [socket, setSocket] = useState(null);
  const [turn, setTurn] = useState(true);
  const [deck, setDeck] = useState([]);

  const drawCard = () => {
    deck.pop();

    socket.emit('send_deck', deck);
    setTurn(false);
  }

  const shuffleDeck = () => {
    deck.sort(() => 0.5 - Math.random());

    socket.emit('send_deck', deck);
    setTurn(false);
  }

  useEffect(() => {
    const newSocket = io('http://localhost:3001');

    newSocket.on('connect', (socket) => {
      console.log('socket connected', newSocket);
    })

    newSocket.on('receive_initial_deck', (deck) => {
      setDeck(deck);
      setTurn(true);
    })

    newSocket.on('receive_deck', deck => {
      setDeck(deck);
      setTurn(true);
    })

    if (!deck.length) {
      setTurn(false)
    }
    
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div>
      <h1>Room</h1>
      <h4>{turn ? 'Go ahead' : 'Wait for your turn'}</h4>
      {console.log(turn)}
      <h3>{turn && deck}</h3>
      <button onClick={drawCard} disabled={!turn}>Draw card</button>
      <button onClick={shuffleDeck} disabled={!turn}>Shuffle</button>
    </div>
  )
}
