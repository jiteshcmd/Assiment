// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
