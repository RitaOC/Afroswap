import logo from "./logo.svg";
import React from "react";
import "../src/styles/App.css";
import { Landing } from "./components/Landing";

// function App() {
//   return (
//     <React.Fragment>
//       <home/>
//     </React.Fragment>
//   );
// }
const App = () => {
  return (
    <div>
      <React.Fragment>{<Landing />}</React.Fragment>
    </div>
  );
};

export default App;
