import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Rowbox from './components/Rowbox';

class App extends Component {
  render() {
    return (
      <main className='container'>
        <div className='row row1'>
          <h1>Fay Ray</h1>
        </div>
        <div className='row'>
          <Rowbox text='Is a band'/>
          <Rowbox text='Has a new single'/>
        </div>
        <div className='row'>
          <Rowbox text='Plays shows'/>
          <Rowbox text='Takes photos'/>
          <Rowbox text='Uses email'/>
        </div>
      </main>
    );
  }
}

export default App;
