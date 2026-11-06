import Navbar from "./components/Navbar";

import Textform from "./components/Textform";
import "./App.css";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
