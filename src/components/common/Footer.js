import React from 'react';
import './footer.css';

const Footer = React.createClass({
  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <footer className="footer">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <p>&copy; 2017, School of International Education</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

    );
  }
});

export default Footer;