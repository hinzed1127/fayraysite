import React from 'react';
import './space.css';
import Joe from '../../img/space/surfing_joe.png';
import Erik from '../../img/space/opland_kitty.png';
import Rob from '../../img/space/rob2.png';
import Noah from '../../img/space/triangle_face.png';
import Murl from '../../img/space/murl_in_space2.png';
import Tom from '../../img/space/tom.png';

export default function Space() {
	return (
		<div>
			<div className='space'>
				<h1 className='nameHeader'>FAY RAY</h1>
				<div className='person'>
					<div className='joe'>
						<img src={Joe} alt='Surfing Joe'/>
					</div>
					<div className='description'>
						<div className='description-text'>
							<div>Joe</div>
							<div>Keys/Synths</div>
						</div>
					</div>
				</div>
				<div className='person'>
					<div className='erik'>
						<img src={Erik} alt='Erik kitty'/>
					</div>
					<div className='description'>
						<div className='description-text'>
							<div>Erik</div>
							<div>Bass</div>
						</div>
					</div>
				</div>
				<div className='person'>
					<div className='rob'>
						<img src={Rob} alt='Rob' />
					</div>
					<div className='description'>
						<div className='description-text'>
							<div>Rob</div>
							<div>Keys</div>
						</div>
					</div>
				</div>
				<div className='person'>
					<div className='noah'>
						<img src={Noah} alt='Noah' />
					</div>
					<div className='description'>
						<div className='description-text'>
							<div>Noah</div>
							<div>Guitar</div>
						</div>
					</div>
				</div>
				<div className='person'>
					<div className='murl'>
						<img src={Murl} alt='Mariel' />
					</div>
					<div className='description'>
						<div className='description-text'>
							<div>Mariel</div>
							<div>Vocals</div>
						</div>
					</div>
				</div>
				<div className='person'>
					<div className='tom'>
						<img src={Tom} alt='Tom' />
					</div>
					<div className='description'>
						<div className='description-text'>
							<div>Tom</div>
							<div>Drums</div>
						</div>
					</div>
				</div>
			</div>

			<div className='bio-container'>
				<p className='bio'>
					Fay Ray (formerly Church Booty) has evolved. With 8 moving parts topped by the electric vocals of Mariel Fechik, 
					the Chicago band's funk and jazz influence grows into a character all its own. Fay Ray's debut EP “No Love,” released Oct 2017, 
					brings the band's chemistry and collaboration into the spotlight, with 4 diverse tracks that explore the intricacy of romantic relationships. 
					Heading out of a packed 2017, Fay Ray confidently steps into their new identity. Catch them in full force at Emporium on 11/27, just a taste of what’s to come.
				</p>

				<p className='members'>Fay Ray is Mariel, Dan, Joe, Tom, Erik, Noah, Rob, and Byron.</p>
			</div>
		</div>
	);
}