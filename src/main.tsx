import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Events from "./pages/Events.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/events" element={ <Events/> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
