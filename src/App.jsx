import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";

function App() {
  console.log("Test");
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

// Import first, and then return a component as a function, and export it as default for later use. (ALL REACT JSX)

// JSX is a combination of HTML and JavaScript
