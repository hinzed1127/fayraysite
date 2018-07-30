import React, { Component } from 'react';
import './Home.css';
import Rowbox from '../../components/Rowbox/Rowbox';
import IconRow from '../../components/IconRow/IconRow';
class Home extends Component {
  render() {
    const soundcloudLink = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/364242659&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true';
    return (
      <main className='container'>
        <div className='row row1'>
          <div className='heading'>
            <div className='titleContent'>
                <h1 className='nameHeader'>FAY RAY</h1>
                 <h3 className='nameHeader subtext'>
                  <i>No Love EP</i>
                </h3>
                <h3 className='nameHeader subtext'>
                  Out Now
                </h3>
            </div>
            <div className='soundcloudPlayer-container'>
              <iframe
                className='soundcloudPlayer'
                title='Stuck soundcloud stream'
                width='100%'
                height='340'
                scrolling='no' 
                frameBorder='no'
                src={soundcloudLink}
              />
            </div>
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
            text='Records music'
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
