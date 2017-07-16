// @flow
import React from 'react';
import history from '../../history';

class Link extends React.Component {
	props : {
		to: string | {}
	}

	handleClick = (event: any) => {
		if (event.button !== 0 /* left click */) {
			return;
		}

		if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
			return;
		}

		if (event.defaultPrevented === true) {
			return;
		}

		event.preventDefault();

		if (this.props.to) {
			history.push(this.props.to);
		} else {
			history.push({
				pathname: event.currentTarget.pathname,
				search: event.currentTarget.search
			});
		}
	};

	render() {
		const { to, ...props } = this.props;
		return (
			// eslint-disable-next-line jsx-a11y/anchor-has-content
			<a
				href={typeof to === 'string' ? to : history.createHref(to)}
				{...props}
				onClick={this.handleClick}
			>
				{this.props.children}
			</a>
		);
	}
}

export default Link;