import React from 'react';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

export default function Room() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');

    newSocket.on('connect', (socket) => {
      console.log('socket connected', newSocket);
    })
    
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div>
      <h1>Room</h1>
    </div>
  )
}
