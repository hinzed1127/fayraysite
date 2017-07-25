import React from 'react';
import Icon from '../Icon/Icon';
import {ICONS} from '../../constants/Icons';
import {LINKS} from '../../constants/Links';

export default function IconRow() {
	return (
		<div className='iconRow'>
			<Icon
				icon={ICONS.BANDCAMP}
				link={LINKS.BANDCAMP}
			/>
			<Icon
				icon={ICONS.ITUNES}
				link={LINKS.ITUNES}
			/>
			<Icon
				icon={ICONS.YOUTUBE}
				link={LINKS.YOUTUBE}
			/>
			<Icon
				icon={ICONS.FACEBOOK}
				link={LINKS.FACEBOOK}
			/>
			<Icon
				icon={ICONS.INSTAGRAM}
				link={LINKS.INSTAGRAM}
			/>
			<Icon
				icon={ICONS.SPOTIFY}
				link={LINKS.SPOTIFY}
			/>
			<Icon
				icon={ICONS.SOUNDCLOUD}
				link={LINKS.SOUNDCLOUD}
			/>
		</div>
	);
}