import React, {useState} from "react";

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }

     const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared");
    }

    const handleOnChange = (event) => {
          setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="form-field mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value = {text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    </div>

    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.trim().split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.trim().split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
