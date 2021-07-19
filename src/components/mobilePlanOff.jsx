import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h6 className="card-miniTitle">Mobilus START 1</h6>
          <h5 className="card-numberTitle">
            <span>1GB</span> 2GB
          </h5>
          <p className="numberMiniTitle">Iš jų 1GB ES/EEE</p>
          <p className="card-text">Neribotas MIN ir SMS</p>
          <div className="card-body">
            <ul>
              <li>M.parašas(6 mėn.)</li>
              <li>Įrangos druadimas (3 mėn.)</li>
            </ul>
          </div>
          <div className="card-footer">
            <h6 className="footerTitle">9, 00 $/mėn.</h6>
            <p className="footerMiniTitle">24 mėn. sutartis</p>
            <a href="/" className="footer-btn">
              Gauti pasiulyma
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
