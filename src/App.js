import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormSubmit from "./Components/Assingment2/FormSubmit";
import Calculator from "./Components/Assingment1/Calculator";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/form" element={<FormSubmit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
