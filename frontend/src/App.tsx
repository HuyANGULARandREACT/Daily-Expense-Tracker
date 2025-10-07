import React from "react";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
