import React, { Component } from 'react';
import './App.css';
import './index.css';
import Rowbox from './components/Rowbox';
import IconRow from './components/IconRow';

class App extends Component {
  render() {
    return (
      <main className='container'>
        <div className='row row1'>
          <h1 className='nameHeader'>Fay Ray</h1>
          <IconRow />
        </div>
        <div className='row row2'>
          <Rowbox text='Is a band' number='1'/>
          <Rowbox text='Has a new single' number='2'/>
        </div>
        <div className='row row3'>
          <Rowbox text='Plays shows' number='3'/>
          <Rowbox text='Takes photos' number='4'/>
          <Rowbox text='Uses email' number='5'/>
        </div>
      </main>
    );
  }
}

export default App;
