// icons
import { useState } from "react";
import { LightModeIcon, DarkModeIcon } from "../../constants/icons.js";
// css
import "./styles.css";
import setTo from "./utils.js";

const ThemeProvider = () => {
  // getting HTML element where we have set data-theme attribute
  const HTML = document.documentElement;
  const body = document.body;
  // on refresh whatever the mode set we are remaining it
  HTML.setAttribute(
    "data-theme",
    localStorage.getItem("data-theme") || "light"
  );
  // getting theme data attribute value
  let theme = HTML.getAttribute("data-theme");
  // to toggle theme icon
  const [mode, setMode] = useState(
    localStorage.getItem("data-theme") || "light"
  );
  if (mode === "light") {
    body.style.backgroundImage = "url(./src/assets/images/light.jpg)";
  } else {
    body.style.backgroundImage = "url(./src/assets/images/dark.jpg)";
  }

  // toggle the mode
  function toggleMode() {
    theme === "light"
      ? setTo("dark", setMode, HTML)
      : setTo("light", setMode, HTML);
  }

  return (
    <button id="theme-btn" onClick={toggleMode}>
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default ThemeProvider;
