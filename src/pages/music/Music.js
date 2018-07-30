import React from 'react';
import './music.css';
import singleArt from '../../img/ep/ep_art.jpg';
import {LINKS} from '../../constants/Links';

export default function Music() {
	return (
		<div className='music-wrapper'>
			<div className='music-container'>
				<div>
					<img
						className='ep-art'
						src={singleArt}
						alt='Artwork for the Single "Stuck"'
					/>
				</div>
				<div className='links-and-content'>
					<p className='description'>
							<i>No Love EP</i>
							<br></br>
							Released October 2017
					</p>
					<div className='links'>
						<div>
							<div className='no-love-link-button'>
								<a href={LINKS.BANDCAMP}>Bandcamp</a>
							</div>
							<div className='no-love-link-button'>
								<a href={LINKS.SPOTIFY}>Spotify</a>
							</div>
						</div>
						<div>
							<div className='no-love-link-button'>
								<a href={LINKS.ITUNES}>iTunes</a>
							</div>
							<div className='no-love-link-button'>
								<a href={LINKS.SOUNDCLOUD}>SoundCloud</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}