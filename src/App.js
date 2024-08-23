
import './App.css';
import Contact from './Contact/Contact.jsx';
import Education from './Education/Education.jsx';
import Footer from './Footer/Footer.jsx'; 
import Navbar from './Navbar/Navbar.jsx';
import Projects from './Projects/Projects.jsx';
import Skills from './Skills/Skills.jsx';
import About from './About/About.jsx';
import Scripts from './Scripts/Scripts.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer />
      <Scripts/>
    </div>
  );
}

export default App;

