import { Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Home from "./pages/Home";
import "./App.css";
import Providence from "./pages/Providence";
import Cranston from "./pages/Cranston";
import Pawtucket from "./pages/Pawtucket";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {


  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/providence" element={<Providence />} />
    <Route path="/cranston" element={<Cranston />} />
    <Route path="/pawtucket" element={<Pawtucket />} />
    </Routes>
  );
};

export default App;
