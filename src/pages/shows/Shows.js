import React from 'react';
import './shows.css';
import lhPoster from '../../img/lincoln-hall-show.jpg';

function showGif() {
	const gif = document.querySelector('#wowGif');
	gif.className = 'show';
}

export default function Shows() {
	const googleMapsLink = 'https://goo.gl/maps/FfZM5KfPnxn'
	const lhEvent = 'http://www.lh-st.com/Shows/08-19-2017+The+North+41';
	const northFortyOneLink = 'https://www.youtube.com/watch?v=MOA69DGX-UU';
	const steadyFlowlink = 'https://www.youtube.com/watch?v=gUm6sAXjuws';
	const akenyaLink = 'https://www.youtube.com/watch?v=U-DvsejV21g';
	const wowGif = 'https://media.giphy.com/media/3o8dFn0ixg0rtwlQnC/giphy.gif';
	const fbEvent = 'https://www.facebook.com/events/105253993411938/';
	return (
		<div>
			<h1 className='next-show-header'>Next Show:</h1>
			<div className='shows-container'>
				<div className='show-poster'>
					<img className='poster-img' src={lhPoster} alt='Upcoming show at Lincoln Hall, August 19th' />
				</div>
				<div className='shows-description'>
					<div className='shows-row'>
						We're playing at <a href={googleMapsLink}>Lincoln Hall</a>
					</div>
					<div className='shows-row'>
						Tickets are cheaper if you buy them <a href={lhEvent}>now</a>
					</div>
					<div className='shows-row'>
						<a href={northFortyOneLink}>The North 41</a>,
						<a href={steadyFlowlink}>Steady Flow</a>, <span>AND </span>
						<a href={akenyaLink}> Akenya</a>.
					</div>
					<div className='shows-row'>
						<span className='we-know' onClick={() => showGif()}>We know.</span>
						<img id='wowGif' src={wowGif} alt='wow gif'/>
					</div>
					<div className='shows-row'>
						Tell those folks on <a href={fbEvent}>Facebook</a> you're going, too
					</div>
				</div>
			</div>
		</div>
	);
}
