import React, { Component } from 'react';
import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beIsipareiojimu: true,
      mobile1: {},
    };
  }

  // component did mount hook parsisiusnciam plan1.json faila ir issaugom state

  // perduodam mobile1 i MobilePlan

  // MobilePlan pasiimam duomenis ir uzpildom kortele

  handleRadio = (val) => {
    console.log('radio was pressed');
    console.log(val);
    // jei gaunu commit tai nustatau busena  i atitinkama
    if (val === 'commit') {
      this.setState({ beIsipareiojimu: false });
    } else {
      this.setState({ beIsipareiojimu: true });
    }
    // arba priesingai
  };

  async componentDidMount() {
    const { data: dataAxios } = await axios.get('data/plan1.json');
    console.log(dataAxios);
    this.setState({ mobile1: dataAxios });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Mobiliojo ryšio planai</h1>
          <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
          <div className="controls d-flex">
            <Commitment handleRadio={this.handleRadio} noCommitment={this.state.beIsipareiojimu} />
            <HaveServices />
          </div>
          <main className="plan-cards">
            <MobilePlan plan={this.state.mobile1} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
