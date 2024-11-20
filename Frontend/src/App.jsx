import Navbar from "./components/Navbar";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Hhome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shopping from "./pages/Shopping";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
