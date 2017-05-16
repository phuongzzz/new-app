import React, { Component } from 'react';
import NavigationBar from './components/common/NavigationBar';
import Footer from './components/common/Footer';
import './App.css';
import '../node_modules/toastr/build/toastr.min.css';
import { RouteTransition } from 'react-router-transition';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar {...this.props}/>
        <div className="content-wrapper">
          <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ opacity: 0.0 }}
            atLeave={{ opacity: 0.3 }}
            atActive={{ opacity: 1 }}
          >
            {React.cloneElement(this.props.children, this.props)}
          </RouteTransition>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
