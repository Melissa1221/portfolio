import './App.css';
import './styles/banner.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/about.css';
import './styles/responsive.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useTranslation } from "react-i18next";
import { About } from './components/About';
import { Footer } from './components/Footer';





function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
     
      <Projects/>
      <Experience/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
