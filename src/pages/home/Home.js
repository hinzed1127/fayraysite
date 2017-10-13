import React, { Component } from 'react';
import './Home.css';
import Rowbox from '../../components/Rowbox/Rowbox';
import IconRow from '../../components/IconRow/IconRow';

class Home extends Component {
  render() {
    const soundcloudLink = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344213190&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true';
    return (
      <main className='container'>
        <div className='row row1'>
          <div className='titleContent'>
              <h1 className='nameHeader'>FAY RAY</h1>
              <iframe
                className='soundcloudPlayer'
                title='Stuck soundcloud stream'
                width='100%'
                height='166'
                scrolling='no' 
                frameborder='no'
                src={soundcloudLink}
              />
              <h3 className='nameHeader subtext one'>
                Single "Stuck" Out Now
              </h3>
              <h3 className='nameHeader subtext two'>
                <i>No Love EP</i> Out 10/19
              </h3>
          </div>
          <IconRow />
        </div>
        <div className='row row2'>
          <Rowbox
            text='Is a band'
            linkPath='/bio'
            number={'1'}
          />
          <Rowbox
            text='Has a new EP'
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
