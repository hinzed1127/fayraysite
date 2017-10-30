import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ShowsTable.css';

const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default class ShowsTable extends React.Component {

	state = {
		shows: null
	};

	fetchShows(dateRange) {
		const DATERANGE = (dateRange === 'past') ? '&date=2014-08-10,2017-08-09' : '';
		const ENDPOINT = `https://rest.bandsintown.com/artists/fayray/events?app_id=music${DATERANGE}`;

		return fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => {
				if (dateRange !== 'future') {
					return data.sort(function (a, b) {
						return new Date(b.datetime) - new Date(a.datetime)
					});
				} else {
					return data;
				}
			});
	}

	setDateRange(dateRange) {
		this.setState({shows: null});

		this.fetchShows(dateRange).then((data) => {
			this.setState({
				shows: data.slice(0,10),
				future: (dateRange === 'future')
			});
		});
	}

	componentDidMount() {
		this.fetchShows('future').then((data) => {
			this.setState({
				shows: data,
				future: true
			});
		});
	}

	renderTable = () => {
		if (this.state.shows.length === 0) {
			return (
				<div className='shows-empty-state'>
					No upcoming shows
				</div>
			);
		} else {
			return (
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th className='day'></th>
							<th>Venue</th>
							<th>Location</th>
							{this.state.future &&
								<th className='more'></th>
							}
						</tr>
					</thead>
					<tbody>
						{
							this.state.shows.map((show, index) => {
							    const date = new Date(show.datetime);
								return (
									<tr key={index}>
										<td>{`${MONTHS[date.getMonth()]} ${date.getDate()}`}</td>
										<td>{`${DAYS[date.getDay()]}`}</td>
										<td>{show.venue.name}</td>
										<td>{`${show.venue.city}, ${show.venue.region}`}</td>
										{this.state.future &&
											<td>
												<a href={show.url} className='rsvp-link'>
													RSVP
												</a>
											</td>
										}
									</tr>
								);
							})
						}
					</tbody>
				</table>
			);
		}
	};

	render() {

		if (this.state.shows === null) {
			return (
				<LoadingSpinner />
			);
		} else {
			return (
				<div className='table-container'>
					<div className='tabs'>
						<span className={this.state.future ? 'tab-option active' : 'tab-option'} onClick={() => this.setDateRange('future')}>Upcoming Shows</span>
						<span> | </span>
						<span className={!this.state.future ? 'tab-option active' : 'tab-option'} onClick={() => this.setDateRange('past')}>Past Shows</span>
					</div>
						{this.renderTable()}
				</div>
			);
		}
	}
}