import React from 'react';
import { Link } from 'react-router';

import Header from './header';
import Hero from './hero';
import CultivatorSignUp from './cultivator-sign-up';
import RetailerSignUp from './retailer-sign-up';
import Footer from './footer';

const Main = React.createClass({
	render() {
		return (
				<div>

					<Header/>
					<Hero/>

          <div className="row" data-equalizer data-equalize-on="medium">
              <div className='sign-up-container medium-6 columns'>
                <Link to='/cultivator-sign-up'>
									<h3>I'm a cultivator</h3>
                  <div className="sign-up-button callout" >Cultivator Sign Up</div>
                </Link>
              </div>

              <div className='sign-up-container medium-6 columns'>
                <Link to='/retailer-sign-up'>
									<h3>I'm a retailer</h3>
                  <div className="sign-up-button callout" >Retailer Sign Up</div>
                </Link>
              </div>
          </div>

					<Footer/>
   			</div>

		)
	}
});

export default Main;
