import Navbar from "./navbar/Navbar";
import Navbar1 from "./body/Navbar1";
import Footer from "./footer/footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cafe from "./body/cafe";
import Contact from "./body/contact";
import About from "./body/about";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes className="route">
        <Route path="/" element={[<Navbar1 />]} />
        <Route path="/cafe" element={[<Cafe />]} />
        <Route path="/contact" element={[<Contact />]} />
        <Route path="/about" element={[<About />]} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
