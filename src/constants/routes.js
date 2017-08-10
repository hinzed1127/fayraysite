import React from 'react';
// import Bio from '../pages/bio/Bio';
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home';
import Music from '../pages/music/Music';
import Multimedia from '../pages/multimedia/Multimedia';
import Shows from '../pages/shows/Shows';
import Space from '../pages/space/Space';

export const routes = [
	{
		path: '/',
		action: () => <Home />
	},
	{
		path: '/bio',
		// action: () => <Bio />
		action: () => <Space />
	},
	{
		path: '/contact',
		action: () => <Contact />
	},
	{
		path: '/music',
		action: () => <Music />
	},
	{
		path: '/media',
		action: () => <Multimedia />
	},
	{
		path: '/shows',
		action: () => <Shows />
	},
	{
		path: '/space',
		action: () => <Space />
	}
];