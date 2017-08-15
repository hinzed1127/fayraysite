import React from 'react';
import './multimedia.css';
import alley from '../../img/media/alley.jpg';
import lincolnHall from '../../img/media/lincoln-hall.jpg';
import milk from '../../img/media/milk.jpg';
import pygmalion from '../../img/media/pygmalion.jpg';
import alleyWalking from '../../img/media/alley-walking.jpg';


export default function Multimedia() {
	return (
		<div>
			<div className='multimedia-container'>
				<div className='video-container'>
					<iframe
						className='sofar-video'
						title='Sofar Sounds Chicago: Fay Ray'
						src='https://www.youtube.com/embed/SmwPLvajZFo'
						frameBorder='0'
						allowFullScreen
					/>
				</div>
			</div>
			<div className='photos-container'>
				<img src={alley} alt='Alley Promo'/>
				<img src={lincolnHall} alt='Lincoln Hall Show'/>
				<img src={milk} alt='Milk Promo'/>
				<img src={pygmalion} alt='Pygmalion Show'/>
				<img src={alleyWalking} alt='Alley Walking Promo'/>
			</div>
		</div>
	);
}