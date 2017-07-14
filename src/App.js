import React, { Component } from 'react';
import './App.css';
import Rowbox from './components/Rowbox';
import IconRow from './components/IconRow';

class App extends Component {
  render() {
    return (
      <main className='container'>
        <div className='row row1'>
          <h1>Fay Ray</h1>
          <IconRow />
        </div>
        <div className='row row2'>
          <Rowbox text='Is a band'/>
          <Rowbox text='Has a new single'/>
        </div>
        <div className='row row3'>
          <Rowbox text='Plays shows'/>
          <Rowbox text='Takes photos'/>
          <Rowbox text='Uses email'/>
        </div>
      </main>
    );
  }
}

export default App;
