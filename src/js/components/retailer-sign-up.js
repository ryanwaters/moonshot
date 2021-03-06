import React from 'react';

import Header from './header'
import Footer from './footer'

const RetailerSignUp = React.createClass({
  render() {
    return (
      <div>
        <Header/>
          <div className="retailer-sign-up row">
            <div className="medium-6 columns">
              <label>First Name
                <input type='text' placeholder='enter first name'/>
              </label>
              <label>Last Name
                <input type='text' placeholder='enter last name'/>
              </label>
              <label>Store Name
                <input type='text' placeholder='enter store name'/>
              </label>
            </div>
            <div className="medium-6 columns">
              <label>Street Address
                <input type='text' placeholder='address'/>
              </label>
              <label>City
                <input type='text' placeholder='city'/>
              </label>
              <label>State
                <input type='text' placeholder='state'/>
              </label>
              <label>Country
                <input type='text' placeholder='country'/>
              </label>
            </div>
          </div>
          <Footer/>
        </div>
    )
  }
});

export default RetailerSignUp;
