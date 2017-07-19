import React from 'react';
import Bio from '../pages/bio/Bio';
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home';
import Music from '../pages/music/Music';
import Photos from '../pages/photos/Photos';
import Shows from '../pages/shows/Shows';
import Murl from '../pages/murl/Murl';

export const routes = [
	{
		path: '/',
		action: () => <Home />
	},
	{
		path: '/bio',
		action: () => <Bio />
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
		path: '/photos',
		action: () => <Photos />
	},
	{
		path: '/shows',
		action: () => <Shows />
	},
	{
		path: '/murl',
		action: () => <Murl />
	}
];