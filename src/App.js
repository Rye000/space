import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/Home/Home";
import About from "./components/about/about";
import Project from "./components/project/project";
import Blog from "./components/blog/blog";
import Cooperate from "./components/cooperate/cooperate.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Cooperate" element={<Cooperate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
