import React, { Component } from 'react';
import '../public/styles/main.css';
import 'animate.css/animate.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
