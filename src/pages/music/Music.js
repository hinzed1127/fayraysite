import React from 'react';
import './music.css';
import singleArt from '../../img/ep/ep_art.jpg';

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
					Out Everywhere Oct. 19
				</p>
			</div>
		</div>
	);
}