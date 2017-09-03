import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {render} from 'react-snapshot';
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home';
import Music from './pages/music/Music';
import Multimedia from './pages/multimedia/Multimedia';
import Shows from './pages/shows/Shows';
import Space from './pages/space/Space';
import NavBar from './components/NavBar/NavBar';
import './index.css';
import 'babel-polyfill';
// import registerServiceWorker from './registerServiceWorker';

render(
	<Router>
		<div className='router-container'>
			<Route exact path='/' component={Home} />
			<Route path="/(bio|contact|music|media|shows)/" component={NavBar} />
			<Route path='/bio' component={Space} />
			<Route path='/contact' component={Contact} />
			<Route path='/music' component={Music} />
			<Route path='/media' component={Multimedia} />
			<Route path='/shows' component={Shows} />
		</div>
	</Router>,
	document.getElementById('root')
);

// registerServiceWorker();
