import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Procedures from './components/Procedurs'
import Contact from './components/Contact'
import Nav from './components/Nav'
import ProcedureDetails from './components/ProcedureDetails'

import './App.css';
import './style.scss';

function App() {
  // const proceduresList = ['Cleaning', 'ZOOM whitining', "Clear Aligners", "Cosmetic Dentistry"]
  const proceduresList = [
    {
      name: 'ZOOM Clearning',
      id: 1,
      description: 'Get blindingly clean teeth'
    },
    {
      name: 'Cleaning',
      id: 2,
      description: 'Standard prophy cleaning'
    },
    {
      name: 'Clear aligners',
      id: 3,
      description: 'Get straighter teeth with less hassel'
    },
    {
      name: 'Cosmetic Dentistry',
      id: 4,
      description: 'Get the smile you always wanted'
    }
  ]
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route 
      path="/procedures" exact
      render={() => { return <Procedures 
      proceduresList={proceduresList} /> 
      }}
      />
      <Route 
      path="/procedures/:id" 
      render={(routeInfo) => { 
        const id = routeInfo.match.params.id
        const targetProcedure = 
        proceduresList.find((p) => p.id 
        === parseInt(id))
        return <ProcedureDetails 
        procedure={targetProcedure} />
      }}
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
