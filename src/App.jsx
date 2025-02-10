import { Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Home from "./pages/Home";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {


  return (
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
