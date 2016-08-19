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

          <div className="row">
              <div className='sign-up-container small-6 column'>
                <Link to='/cultivator-sign-up'>
                  <button className="button" type='button'>Cultivator Sign Up</button>
                </Link>
              </div>

              <div className='sign-up-container small-6 column'>
                <Link to='/retailer-sign-up'>
                  <button className="button" type='button'>Retailer Sign Up</button>
                </Link>
              </div>
          </div>

					<Footer/>
   			</div>

		)
	}
});

export default Main;
