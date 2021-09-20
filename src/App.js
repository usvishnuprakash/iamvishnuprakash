import AboutMe from "./sections/aboutme";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Intro from "./sections/intro";
import Skills from "./sections/skills";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Education />
      <Experience />
      <Skills></Skills>
    </div>
  );
}

export default App;
