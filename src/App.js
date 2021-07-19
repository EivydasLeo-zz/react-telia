import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Hello world</h1>
        <Commitment />
        <HaveServices />
        <MobilePlan />
      </main>
    </div>
  );
}

export default App;
