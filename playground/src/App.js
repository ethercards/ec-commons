import logo from './logo.svg';
import './App.css';
import { ECNav , ECFooter} from 'ec-commons';

function App() {

  return (
    <>
      <ECNav projectUrl="https://something"/>
      
      <div className="py-5 my-5">content</div>
      <ECFooter/>
    </>
  );
}

export default App;
