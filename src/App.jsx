import "./App.css";
import Menubar from "./components/menubar/Menubar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Menubar></Menubar>
      {/* <Hero></Hero> */}
      <Projects></Projects>
      <Footer></Footer>
      {/* <div className="app-content">Content</div> */}
    </div>
  );
};

export default App;
