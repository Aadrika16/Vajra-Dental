import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path = "/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;