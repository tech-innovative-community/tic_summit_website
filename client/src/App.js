import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import FAQ from "./Components/FAQ/FAQ";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import CurriculumPage from "./Pages/Curriculum/Curriculum";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
