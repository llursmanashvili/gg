import Navbar from "./navbar/Navbar";
import { Navbar1, Navbar2 } from "./body/Navbar1";
import { Footer, Footer1 } from "./footer/footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Cafe, Cafe1 } from "./body/cafe";
import { Contact, Contact1 } from "./body/contact";
import { Suite, Suite1 } from "./body/suites/suite";
import { Double, Double1 } from "./body/suites/double";
import { Doubletwin, Doubletwin1 } from "./body/suites/twin";
import { Family, Family1 } from "./body/suites/family";
import { Presidental, Presidental1 } from "./body/suites/presidental";
import { About, Abouten } from "./body/about";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes className="route">
        <Route path="/" element={[<Navbar1 />, <Footer />]} />
        <Route path="/english" element={[<Navbar2 />, <Footer1 />]} />
        <Route path="/cafe" element={[<Cafe />, <Footer />]} />
        <Route path="/cafeen" element={[<Cafe1 />, <Footer1 />]} />
        <Route path="/suites" element={[<Suite />, <Footer />]} />
        <Route path="/suitesen" element={[<Suite1 />, <Footer1 />]} />
        <Route path="/contact" element={[<Contact />, <Footer />]} />
        <Route path="/contacten" element={[<Contact1 />, <Footer1 />]} />
        <Route path="/about" element={[<About />, <Footer />]} />
        <Route path="/abouten" element={[<Abouten />, <Footer1 />]} />
        <Route path="/standarttwin" element={[<Doubletwin />, <Footer />]} />
        <Route
          path="/standarttwinen"
          element={[<Doubletwin1 />, <Footer1 />]}
        />
        <Route path="/standartdouble" element={[<Double />, <Footer />]} />
        <Route path="/standartdoubleen" element={[<Double1 />, <Footer1 />]} />
        <Route path="/familylux" element={[<Family />, <Footer />]} />
        <Route path="/familyluxen" element={[<Family1 />, <Footer1 />]} />
        <Route path="/presidentallux" element={[<Presidental />, <Footer />]} />
        <Route
          path="/presidentalluxen"
          element={[<Presidental1 />, <Footer1 />]}
        />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
