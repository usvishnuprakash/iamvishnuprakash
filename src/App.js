import AboutMe from "./sections/aboutme";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Intro from "./sections/intro";
import Links from "./sections/links";
import Skills from "./sections/skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Intro />
            <AboutMe />
            <Education />
            <Experience />
            <Skills></Skills>
            <Links />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
