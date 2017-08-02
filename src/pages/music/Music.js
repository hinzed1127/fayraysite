import React from 'react';
import './music.css';
// import singleGif from '../../img/single_art.gif'
import singleArt from '../../img/ep/single_art.jpg';

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
					Single, "Stuck," coming soon.
					<br></br>
					Part of our upcoming
					<br></br>
					<i> No Love EP</i>
				</p>
			</div>
		</div>
	);
}