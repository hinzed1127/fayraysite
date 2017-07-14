import React from 'react';
import Icon from './Icon';
import {ICONS} from '../constants/Icons';

export default function IconRow() {
	return (
		<div className='iconRow'>
			<Icon icon={ICONS.BANDCAMP} />
			<Icon icon={ICONS.ITUNES} />
			<Icon icon={ICONS.YOUTUBE} />
			<Icon icon={ICONS.FACEBOOK} />
			<Icon icon={ICONS.INSTAGRAM} />
			<Icon icon={ICONS.SPOTIFY} />
			<Icon icon={ICONS.SOUNDCLOUD} />
		</div>
	);
}