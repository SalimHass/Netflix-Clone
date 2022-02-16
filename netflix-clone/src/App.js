import logo from './logo.svg';
import './App.css';
import './components/Home/Home'
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="App">
      <h2>Welcome To SalimFix</h2>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/favList`} element={<FavList />} />
    </Routes>
    </div>

      </Router>

  );
}

export default App;
