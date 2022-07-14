"use strict";

const buttons = document.getElementsByClassName("btn");

const direction = ({ target }) => {
  document.getElementById("field").style.flexDirection =
  target.dataset.flexDirection;

  for (const button of buttons) {
    button.style.backgroundColor = "initial";
    button.style.Color = "initial";
  }
  target.style.backgroundColor = "#4fc2f8";
  target.style.Color = "#fff";
};
for (const button of buttons) {
  button.addEventListener("click", direction);
}

