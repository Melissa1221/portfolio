import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
