import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <h1>{this.props.item}</h1>
    )
  }
});

export default Header;
