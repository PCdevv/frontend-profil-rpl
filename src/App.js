import React from 'react';
import Button from './components/button';
import Card from './components/card';
import Navbar from './components/navbar';
import About from './components/about'
import Kontak from './components/kontak';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar/>
          <div className="content">
            <Button/>
            <Card/>
            <Kontak/>
            <About/>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
