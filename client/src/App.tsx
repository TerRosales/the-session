// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Home from "./pages/Home";
import Movements from "./pages/Movements";
import Signin from "./pages/registration/Signin";
import Signup from "./pages/registration/Signup";
import Box from "@mui/material/Box";

interface AppProps {
  darkMode: boolean;
  onThemeToggle: () => void;
}

const App: React.FC<AppProps> = ({ darkMode, onThemeToggle }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header onThemeToggle={onThemeToggle} darkMode={darkMode} />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movements" element={<Movements />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Box>
      <Footer darkMode={darkMode} />
    </Box>
  );
};

export default App;
