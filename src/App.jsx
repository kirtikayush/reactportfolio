import "./App.css";
import Menubar from "./components/menubar/Menubar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Study from "./components/study/Study";
import Websites from "./components/websites/Websites";

const App = () => {
  return (
    <div className="app-container">
      <Menubar></Menubar>
      {/* <Hero></Hero> */}
      <Projects></Projects>
      <Websites></Websites>
      {/* <Study></Study> */}
      <Footer></Footer>
      {/* <div className="app-content">Content</div> */}
    </div>
  );
};

export default App;
