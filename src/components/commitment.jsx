import React, { Component } from 'react';
import CustomRadio from './common/customRadio';

class Commitment extends Component {
  handleRadio = () => {
    console.log('radio was pressed');
    // atvaizduoti 24men. is CustomRadio komponento vidaus

    // pakeisti i teksta is not slected i selected kai paspaudziam ant mygtuko

    // iskviesti handleRadio funkcija is CustomRadio componento
  };

  state = {};
  render() {
    return (
      <div className="commitment-component">
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio>24 men.</CustomRadio>
          </span>
          <span className="c__select-title">24 men</span>
        </div>
        <div className="c__selection">
          <span className="c__select"></span>
          <span className="c__select-title">Be isipareigojimu</span>
        </div>
      </div>
    );
  }
}

export default Commitment;
