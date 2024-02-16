export default function setTo(mode, setMode, HTML, setBgPath, path) {
  setMode(mode);
  setBgPath(path);
  HTML.setAttribute("data-theme", mode);
  localStorage.setItem("data-theme", mode);
}
