import React from "react";
import './home.css';

const HomePage = React.createClass ({
  render() {
    if(Object.keys(this.props.session).length !== 0) {
      return (
        <div className="jumbotron banner">
          <div className="banner-wrapper">
            <h2>Welcome, {this.props.session}</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div className="jumbotron banner">
          <div className="banner-wrapper">
            <h2>Welcome</h2>
          </div>
        </div>
      )
    }
  }
});

export default HomePage;
