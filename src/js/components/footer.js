import React from 'react';

const Footer = React.createClass({
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="menu-centered">
            <ul className="menu">
            <li><a href="#">About</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
            </ul>

          </div>

        </div>

      </footer>
    )
  }
});

export default Footer;
