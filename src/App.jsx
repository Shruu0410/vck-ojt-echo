import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";

import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./styles/pages.css";
import "./App.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <DeveloperInfoPopup
        show={showPopup}
        onClose={handleClosePopup}
        studentName="Shruti Dayanand Halwai"
        studentPhotoUrl="/Images/WhatsApp Image 2025-06-30 at 11.01.33 AM.jpeg"
        uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
      />

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="/chatbot" element={<ChatbotComponent />} />
        </Routes>

        {/* Optional: remove if you don’t want chatbot on all pages */}
        <ChatbotComponent />

        <Footer />
      </Router>
    </>
  );
};

export default App;
