import React from 'react';
import Header from './header';

const App = React.createClass({
	render() {
		return (
			<div>
				<div className='header'>
					<Header item='Home'/>
   			</div>
				<h1> Kittens! </h1>
   		</div>
		)
	}
});

export default App;
