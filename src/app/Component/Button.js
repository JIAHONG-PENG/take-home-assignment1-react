import style from "./Button.scss";

export default function Button({ name, index, clicked, handleButtonOnClick }) {
  return (
    <li
      className={`button ${clicked ? "clicked" : ""}`}
      id={name}
      onClick={handleButtonOnClick}
    >{`(${index}) ${name}`}</li>
  );
}
