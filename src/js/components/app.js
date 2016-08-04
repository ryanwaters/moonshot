import React from 'react';
import { Link } from 'react-router';

import Header from './header';
import Hero from './hero';
import CultivatorSignUp from './cultivator-sign-up';
import RetailerSignUp from './retailer-sign-up';
import Footer from './footer';

const App = React.createClass({
	render() {
		return (
			<div>
				<div className='header'>
					<Header item='Home'/>
					<Hero/>
					<Link to='/cultivator-sign-up'><CultivatorSignUp/></Link>
					<RetailerSignUp/>
					<Footer/>
   			</div>

   		</div>
		)
	}
});

export default App;
