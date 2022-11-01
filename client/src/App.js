import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Room from './Room';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/room" element={<Room />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
