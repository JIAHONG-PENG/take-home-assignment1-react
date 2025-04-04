import style from "./Item.scss";

export default function Item({ name, handleItemOnClick }) {
  return <li onClick={handleItemOnClick}>{name}</li>;
}
