import "./App.css";
import Carticon from "./components/Carticon";
import { LoginIcon } from "./components/LoginIcon";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import PricingPage from "./components/PricingPage";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}

export default App;
