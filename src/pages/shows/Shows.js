import React from 'react';
import Icon from '../../components/Icon/Icon';
import './shows.css';
import lhPoster from '../../img/lincoln-hall-show.jpg';
import {ICONS} from '../../constants/Icons';


let gifIsOpen = false;

function toggleGif() {
	const weKnow = document.querySelector('.we-know');
	const closeGifIcon = document.querySelector('.close-gif-icon');
	const gif = document.querySelector('.wow-gif');

	gifIsOpen = !gifIsOpen;

	if (gifIsOpen) {
		weKnow.className = weKnow.className.concat(' hide');
		closeGifIcon.className = closeGifIcon.className.replace(' hide', '');
		gif.className = gif.className.replace(' hide', '');
	} else {
		weKnow.className = weKnow.className.replace(' hide', '');
		closeGifIcon.className = closeGifIcon.className.concat(' hide');
		gif.className = gif.className.concat(' hide');
	}
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
					<div className='shows-row gif-container'>
						<span
							className = 'we-know'
							onClick={() => toggleGif()}
						>
							We know.
						</span>
						<div className = 'close-gif-icon hide' onClick={() => toggleGif()}>
							<Icon icon={ICONS.CLOSE_CIRCLE} fill='#F00' />
						</div>
						<img
							className = 'wow-gif hide'
							onClick={() => toggleGif()}
							src={wowGif}
							alt='wow gif'
						/>
					</div>
					<div className='shows-row'>
						Tell those folks on <a href={fbEvent}>Facebook</a> you're going, too
					</div>
				</div>
			</div>
		</div>
	);
}
