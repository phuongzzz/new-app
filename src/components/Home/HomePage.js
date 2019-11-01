import React from "react";
import './home.css';
import HomeNotLoggedIn from './HomeNotLoggedIn';
import HomeLoggedIn from './HomeLoggedIn';

const HomePage = React.createClass({
  render() {
    if (Object.keys(this.props.session).length !== 0) {
      return (
        <HomeLoggedIn {...this.props} />
      )
    } else {
      return (
        <HomeNotLoggedIn {...this.props} />
      )
    }
  }
});

export default HomePage;
