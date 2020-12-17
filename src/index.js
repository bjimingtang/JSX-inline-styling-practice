//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();
var message = "";
var textColor = {};

if (hour < 12) {
  message = "Good morning";
  textColor.color = "red";
} else if (hour < 18) {
  message = "Good afternoon";
  textColor.color = "green";
} else {
  message = "Good evening";
  textColor.color = "blue";
}

ReactDOM.render(
  <h1 class="heading" style={textColor}>
    {message}
  </h1>,
  document.getElementById("root")
);
