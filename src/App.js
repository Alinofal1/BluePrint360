import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import GlpiAccordion from "./Pages/GlpiAccordion";
import CyastackAccordion from "./Pages/CyastackAccordion";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glpi" element={<GlpiAccordion />} />
        <Route path="/cyastack" element={<CyastackAccordion />} />
      </Routes>
    </div>
  );
}

export default App;
