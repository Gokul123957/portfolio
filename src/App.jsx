import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from './themes/ThemeProvider';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
