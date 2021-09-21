import AboutMe from "./sections/aboutme";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Intro from "./sections/intro";
import Links from "./sections/links";
import Skills from "./sections/skills";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Education />
      <Experience />
      <Skills></Skills>
      <Links />
    </div>
  );
}

export default App;
