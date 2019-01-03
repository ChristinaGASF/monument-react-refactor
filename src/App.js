import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/navbar'
import Footer from './footer/footer'
import Index from './index/index';
import Blog from './blog/blog';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          { <Blog />  }
          <Index />
          <Footer />
      </div>
    );
  }
}

export default App;
