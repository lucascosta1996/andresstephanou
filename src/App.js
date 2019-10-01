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
      <LanguageOptions />
      <Route exact path="/" render={() => <Exhibitions />} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/exhibitions" component={Exhibitions} />
      <Route path="/index" render={() => {}} />
    </Router>
  );
}

export default App;
