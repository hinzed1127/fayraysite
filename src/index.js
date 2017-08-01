import ReactDOM from 'react-dom';

// import registerServiceWorker from './registerServiceWorker';
import history from './history';
import router from './router';
import {routes} from './constants/routes';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
	google: {
		families: ['VT323','Droid Sans', 'sans-serif']
	}
});

const container = document.getElementById('root');

function renderComponent(component) {
	ReactDOM.render(component, container);
}

function render(location) {
	router.resolve(routes, location)
		.then(renderComponent)
		.catch((error) => router.resolve(routes, { ...location, error }));
}

render(history.location);
history.listen(render);

// registerServiceWorker();
