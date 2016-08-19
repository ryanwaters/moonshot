import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-title">
          <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
            <button className="menu-icon dark show-for-small-only" type="button" data-toggle></button>
          </span>
          <strong>Moonshot</strong>
        </div>
        <div id="responsive-menu">
          <div className="top-bar-right">
            <ul className="menu">
              <li><a href="#">About</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
});

export default Header;
