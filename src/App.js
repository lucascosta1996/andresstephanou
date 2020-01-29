import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Contact from './Components/Contact'
import Exhibitions from './Components/Exhibitions/Exhibitions'
import LanguageOptions from './Components/LanguageOptions'

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Exhibitions} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/work" component={Exhibitions} />
      <Route path="/home" render={() => {}} />
    </Router>
  );
}

export default App;
