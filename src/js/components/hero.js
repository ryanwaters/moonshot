import React from 'react';
import img from 'file!../../static/images/hero-field.jpg'

const Hero = React.createClass({
  render() {
    const divStyle = {
      backgroundImage: 'url(' + img + ')' 
    }
    return (
      <div className="hero" style={divStyle}>
        <div className="column row">
          <h1>moonshot</h1>
          <h3>the marijuana marketplace</h3>
        </div>
      </div>
    )
  }
})

export default Hero;
