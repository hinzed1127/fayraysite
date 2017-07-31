import React from 'react';
import './space.css';
import Joe from '../../img/space/surfing_joe.png';
import Erik from '../../img/space/opland_kitty.png';
import Dan from '../../img/space/dan_scamp.png';
import Rob from '../../img/space/rob2.png';
import Noah from '../../img/space/triangle_face.png';
import Murl from '../../img/space/murl_in_space2.png';
import Tom from '../../img/space/tom.png';

export default function Space() {
	return (
		<div>
			<div className='space'>
				<h1 className='nameHeader'>FAY RAY</h1>
				<div className='person joe'>
					<img src={Joe} alt='Surfing Joe'/>
				</div>
				<div className='person erik'>
					<img src={Erik} alt='Erik kitty'/>
				</div>
				<div className='person dan'>
					<img src={Dan} alt='Dan' />
				</div>
				<div className='person rob'>
					<img src={Rob} alt='Rob' />
				</div>
				<div className='person noah'>
					<img src={Noah} alt='Noah' />
				</div>
				<div className='person murl'>
					<img src={Murl} alt='Mariel' />
				</div>
				<div className='person tom'>
					<img src={Tom} alt='Tom' />
				</div>
			</div>

			<div className='bio-container'>
				<p>Fay Ray is a band from Chicago that plays a weird amalgamation of genres and just wants to make you dance.</p>

				<p>Fay Ray is Mariel, Dan, Joe, Tom, Erik, Noah, Rob, and Byron.</p>
			</div>
		</div>
	);
}