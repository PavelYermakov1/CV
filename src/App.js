import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render(){
  const divStyle = {
    background: 'grey'
  }
  return (
    <div>
      <Header style={divStyle} />
      <Main />
      <Footer />
    </div>
  );
}
}

export default App;
