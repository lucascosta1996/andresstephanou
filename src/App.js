import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Contact from './Components/Contact';
import Exhibitions from './Components/Exhibitions/Exhibitions';

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/contact" component={Contact} />
      <Route path="/exhibitions" component={Exhibitions} />
    </Router>
  );
}

export default App;
