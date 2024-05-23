import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="headding" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
    <div>
      <img className= "random-img" src={img + "?grayscale"} alt="" />
      <img className= "random-img" src={img + "?grayscale"} alt="" />
      <img className= "random-img" src={img + "?grayscale"} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
