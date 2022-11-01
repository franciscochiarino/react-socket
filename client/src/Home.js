import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to React Socket</h1>
      <button>
        <Link to="/room">Start Game</Link>
      </button>
    </div>
  )
}
