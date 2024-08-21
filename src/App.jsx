import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { About } from "./components/About/About.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import { Experiences } from "./components/Experiences/Experiences.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <About/>
      <Profile/>
      <Experiences/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
