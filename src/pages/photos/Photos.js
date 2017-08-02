import React from 'react';
import './multimedia.css'

export default function Photos() {
	return (
		<div>
			<div className='multimedia-container'>
				<div className='video-container'>
					<iframe
						className='sofar-video'
						title='Sofar Sounds Chicago: Fay Ray'
						src='https://www.youtube.com/embed/SmwPLvajZFo'
						frameborder='0'
						allowfullscreen
					/>
				</div>
			</div>
			<div className='photos-container'>
				<img src="http://lorempixel.com/400/200" />
				<img src="http://lorempixel.com/400/200" />
				<img src="http://lorempixel.com/400/200" />
			</div>
		</div>
	);
}
