// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Assignment from "./components/Assignment";



function App() {
  return (
    <div>
      
      <h2>Dashboard </h2>
      <Assignment/>
    </div>
  );
}

export default App;
