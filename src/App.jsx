import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";
import "./index.css"

const App = () => {
  return (
    <>
<Header />
      <div className="bg-[#EAEAEA]" >
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Experience />
      </div>
    </>
  );
};

export default App;
