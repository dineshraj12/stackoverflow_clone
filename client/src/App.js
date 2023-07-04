import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
      </Router>
      
    </div>
  )
}

export default App;
