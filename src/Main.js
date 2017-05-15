import React, { Component } from 'react';
import NavigationBar from './components/common/NavigationBar';
import './App.css';
import '../node_modules/toastr/build/toastr.min.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
