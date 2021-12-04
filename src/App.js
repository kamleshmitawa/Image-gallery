import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Message } from "./components/Message";
import { Columns } from "./components/Columns";
import { ThirdFluid } from "./components/Fluids/ThirdFluid";
import { SecondFluid } from "./components/Fluids/SecondFluid";
import { FirstFluid } from "./components/Fluids/FirstFluid";
import { Footer } from "./components/Footer";
import "./global.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<FirstFluid />} />
          <Route path="/first-fluid" exact element={<FirstFluid />} />
          <Route path="/second-fluid" exact element={<SecondFluid />} />
          <Route path="/third-fluid" exact element={<ThirdFluid />} />
          <Route path="/columns" exact element={<Columns />} />
          <Route path="/messages" exact element={<Message />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
