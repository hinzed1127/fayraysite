import React from 'react';
import {render} from 'react-snapshot';
import 'babel-polyfill';

// import registerServiceWorker from './registerServiceWorker';
import history from './history';
import router from './router';
import {routes} from './constants/routes';
import './index.css';
import WebFont from 'webfontloader';
import NavBar from './components/NavBar/NavBar';

WebFont.load({
	google: {
		families: ['VT323','Droid Sans', 'sans-serif']
	}
});

const container = document.getElementById('root');

function renderComponent(component, location) {
	const app = (location.pathname === '/') ? component :
		(	<div>
				<NavBar />
				{component}
			</div>
		);

	render(app, container);
}

function renderRoute(location) {
	router.resolve(routes, location)
		.then((component) => renderComponent(component, location))
		.catch((error) => router.resolve(routes, { ...location, error }));
}

renderRoute(history.location);
history.listen(render);

// registerServiceWorker();
