// icons
import { useContext, useState } from "react";
import { LightModeIcon, DarkModeIcon } from "../../constants/icons.js";
// css
import "./styles.css";
// setTo
import setTo from "./utils.js";
// image path
import { lightImage, darkImage } from "../../constants/images.js";
import { TodoContext } from "../../context/TodoContextProvider.jsx";

const ThemeProvider = () => {
  // getting HTML element where we have set data-theme attribute
  const { setBgPath } = useContext(TodoContext);
  const HTML = document.documentElement;
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

  mode === "light" ? setBgPath(lightImage) : setBgPath(darkImage);

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
