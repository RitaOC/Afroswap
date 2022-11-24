import logo from "./logo.svg";
import React from "react";
import "../src/styles/App.css";
import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <React.Fragment>
//       <home/>
//     </React.Fragment>
//   );
// }
// const App = () => {
//   return (
//     <div>
//       <React.Fragment>{<Landing />}</React.Fragment>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/index" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
