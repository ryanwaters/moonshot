import React from 'react';
import { Link } from 'react-router';

import Header from './header';
import Hero from './hero';
import CultivatorSignUp from './cultivator-sign-up';
import RetailerSignUp from './retailer-sign-up';
import Footer from './footer';
import Main from './main';

// const AppStateless = (props) => (<div><div className="header">{this.props.children || {}}</div></div>)
// const App = React.createClass({render() { return AppStateless(this.props )}})

const App = React.createClass({
	
	render() {
		return (
			<div>
				{this.props.children || <Main/>}
   		</div>
		)
	}
});

export default App;
