import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Room from './Room';

function App() {
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
