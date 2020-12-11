import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Procedures from './components/Procedurs'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/procedures" component={Procedures} />
    </div>
    </BrowserRouter>
  );
}

export default App;
