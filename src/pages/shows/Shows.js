import React from 'react';
import ShowsTable from '../../components/ShowsTable/ShowsTable';
import './shows.css';
import lincolnHall from '../../img/media/blue-lh.jpg';

export default function Shows() {
	return (
		<div className='shows-table-container'>
			<img className='banner-image' alt='lincoln hall show' src={lincolnHall} />
			<ShowsTable />
		</div>
	);
}
