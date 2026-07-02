import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import GeneralDentistry from "./components/GeneralDentistry";
import PediatricDentistry from "./components/PediatricDentistry";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/general-dentistry" element={<GeneralDentistry />} />
        <Route path="/pediatric-dentistry" element={<PediatricDentistry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;