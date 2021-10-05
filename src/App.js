
import './App.css';
import Navbar from './Components/Navbar'; //use component within app.js
import Home from './pages/home'
import Middle from './Components/Middle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Middle/>
     
    </div>
  );
}

export default App;
