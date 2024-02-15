import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import "./bg-image.css";

const BGImage = () => {
  const { bgPath } = useContext(TodoContext);
  return (
    <div className="bg-image">
      <img src={bgPath} alt="" />
    </div>
  );
};

export default BGImage;
