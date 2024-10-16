import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import TimberPage from "./pages/TimberPage";
import PicketPage from "./pages/PicketPage";
import AluminiumPage from "./pages/AluminiumPage";
import PadestrianPage from "./pages/PadestrianPage";
import FarmFencing from "./pages/FarmFencingPage";
import InstallationPage from "./pages/InstallationPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/timber" element={<TimberPage />} />
          <Route path="/service/picket" element={<PicketPage />} />
          <Route path="/service/aluminium" element={<AluminiumPage />} />
          <Route
            path="/service/pedestrian-driver"
            element={<PadestrianPage />}
          />
          <Route path="/service/farm-fencing" element={<FarmFencing />} />
          <Route
            path="/service/installation-repair"
            element={<InstallationPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
