import Navbar from "./navbar/Navbar";
import Navbar1 from "./body/Navbar1";
import Footer from "./footer/footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cafe from "./body/cafe";
import Contact from "./body/contact";
import About from "./body/about";
import Suite from "./body/suites/suite";
import Doubletwin from "./body/suites/twin";
import Double from "./body/suites/double";
import Family from "./body/suites/family";
import Presidental from "./body/suites/presidental";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes className="route">
        <Route path="/" element={[<Navbar1 />]} />
        <Route path="/cafe" element={[<Cafe />]} />
        <Route path="/suites" element={[<Suite />]} />
        <Route path="/contact" element={[<Contact />]} />
        <Route path="/about" element={[<About />]} />
        <Route path="/standarttwin" element={[<Doubletwin />]} />
        <Route path="/standartdouble" element={[<Double />]} />
        <Route path="/familylux" element={[<Family />]} />
        <Route path="/presidentallux" element={[<Presidental />]} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
