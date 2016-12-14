import React from 'react';

import Datamap from '../datamap.jsx';
import Example from './example.jsx';

export default class BasicExample extends React.Component {

	render() {
		return (
			<Example>
				<Datamap />
			</Example>
		);
	}

}
