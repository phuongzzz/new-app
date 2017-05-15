import React, { Component } from 'react';
import NavigationBar from './components/common/NavigationBar';
import Footer from './components/common/Footer';
import './App.css';
import '../node_modules/toastr/build/toastr.min.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar {...this.props}/>
        {React.cloneElement(this.props.children, this.props)}
        <Footer/>
      </div>
    );
  }
}

export default Main;
