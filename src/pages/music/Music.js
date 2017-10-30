import React from 'react';
import './music.css';
import singleArt from '../../img/ep/ep_art.jpg';
import {LINKS} from '../../constants/Links';

export default function Music() {
	return (
		<div className='music-wrapper'>
			<div className='music-container'>
				<img
					className='ep-art'
					src={singleArt}
					alt='Artwork for the Single "Stuck"'
				/>
				<p className='description'>
					<i>No Love EP</i>
					<br></br>
					Released 10/19
				</p>
				<div className='no-love-link-button'>
					<a href={LINKS.BANDCAMP}>Bandcamp</a>
				</div>
				<div className='no-love-link-button'>
					<a href={LINKS.SPOTIFY}>Spotify</a>
				</div>
				<div className='no-love-link-button'>
					<a href={LINKS.ITUNES}>iTunes</a>
				</div>
				<div className='no-love-link-button'>
					<a href={LINKS.SOUNDCLOUD}>SoundCloud</a>
				</div>
			</div>
		</div>
	);
}