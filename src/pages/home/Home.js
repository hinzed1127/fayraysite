import React, { Component } from 'react';
import './Home.css';
import Rowbox from '../../components/Rowbox/Rowbox';
import IconRow from '../../components/IconRow/IconRow';

class Home extends Component {
  render() {
    return (
      <main className='container'>
        <div className='row row1'>
          <h1 className='nameHeader'>FAY RAY</h1>
          <IconRow />
        </div>
        <div className='row row2'>
          <Rowbox
            text='Is a band'
            linkPath='/bio'
            number={'1'}
          />
          <Rowbox
            text='Has a new single'
            linkPath='/music'
            number={'2'}
          />
        </div>
        <div className='row row3'>
          <Rowbox
            text='Plays shows'
            linkPath='/shows'
            number={'3'}
          />
          <Rowbox
            text='Makes multimedia'
            linkPath='/media'
            number={'5'}
          />
          <Rowbox
            text='Uses email'
            linkPath='/contact'
            number={'4'}
          />
        </div>
      </main>
    );
  }
}

export default Home;
