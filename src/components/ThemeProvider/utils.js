export default function setTo(mode, setMode, HTML) {
  setMode(mode);
  HTML.setAttribute("data-theme", mode);
  localStorage.setItem("data-theme", mode);
}
