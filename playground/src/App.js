import logo from './logo.svg';
import './App.css';
import { ECNav , ECFooter} from 'ec-commons';
import { HashRouter, Router } from 'react-router-dom';

function App() {

  return (
    <>
      <HashRouter>

        <ECNav projectUrl="https://ether.cards"  lightMode/>
        
          <div className="py-5 my-5">content</div>
        <ECFooter/>
      </HashRouter>
    </>
  );
}

export default App;
