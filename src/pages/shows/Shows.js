import React from 'react';
import ShowsTable from '../../components/ShowsTable/ShowsTable';
import './shows.css';

export default function Shows() {
	const googleMapsLink = 'https://goo.gl/maps/FQRtpM4hKv92';
	const fbEvent = 'https://www.facebook.com/events/147660745797262/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A565113923559325%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A565113923559325%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D';
	const bandcampLink = 'https://bandcamp.com/EmbeddedPlayer/track=1513169463/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' 
	return (
		<div>
			<h1 className='shows-header'>Next Show:</h1>
			<div className='shows-container'>
				<div className='show-poster'>
					<div 
						id='i_frame'
						className='fb-video' 
						data-href='https://www.facebook.com/crofton.coleman/videos/1309759969123037/'
						data-width='500' 
						data-show-text='false'
						data-autoplay='true'
					/>
				</div>
				<div className='shows-description'>
					<div className='shows-row'>
						<a href={googleMapsLink}>Cowboy Monkey</a>
					</div>
					<div className='shows-row'>
						Champaign-Urbana, IL
					</div>
					<div className='shows-row'>
						<a href={fbEvent}>RSVP</a>
					</div>
					<div className='shows-row'>
						Supporting Act:
						<iframe
							title='Melvin Knight Bandcamp'
							style={{border: '0', width: '262px', height: '375px'}}
							src={bandcampLink}
							seamless
						>
							<a href='http://croftoncoleman.bandcamp.com/track/kingdom-of-heaven-weekend-warriors'>
								Kingdom of Heaven/ Weekend Warriors by Melvin Knight
							</a>
						</iframe>
					</div>
				</div>
			</div>
			<div className='shows-table-container'>
				<h1 className='shows-header'>More Shows:</h1>
				<ShowsTable />
			</div>
		</div>
	);
}
