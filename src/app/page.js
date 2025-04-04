"use client";

import style from "./page.scss";
import Header from "./Component/Header";
import Button from "./Component/Button";

// import ButtonList from "./Component/ButtonList";
import Item from "./Component/Item";
import { useState } from "react";

export default function Home() {
  const data = {
    Vegeatables: ["Carrot", "Cucumber"],
    Fruits: [
      "Apple",
      "Banana",
      "Pear",
      "Watermelon",
      "Grape",
      "Strawberry",
      "Mango",
      "Blackberry",
    ],
    Spices: ["Salt", "Pepper", "Chilli", "Herbs", "Curry"],
  };

  const [clickedButton, setClickButton] = useState("Vegeatables");
  const [shownData, setShownData] = useState(data[clickedButton]);

  function handleButtonOnClick(event) {
    // if click another button
    if (event.target.innerText.split(" ")[1] !== clickedButton) {
      // remove clicked
      if (document.querySelector(".item-list li.clicked")) {
        document
          .querySelector(".item-list li.clicked")
          .classList.remove("clicked");
      }
      setClickButton(event.target.innerText.split(" ")[1]);
      setShownData(data[event.target.innerText.split(" ")[1]]);
    }
  }

  function handleItemOnClick(event) {
    // remove clicked
    if (document.querySelector(".item-list li.clicked")) {
      document
        .querySelector(".item-list li.clicked")
        .classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }

  const items = shownData.map((item, index) => (
    <Item name={item} key={index} handleItemOnClick={handleItemOnClick} />
  ));

  const buttons = Object.entries(data).map(([key, value], index) => (
    <Button
      name={key}
      index={index + 1}
      key={key}
      clicked={clickedButton === key}
      handleButtonOnClick={handleButtonOnClick}
    />
  ));

  return (
    <div className="container">
      {/* header */}
      <Header />

      {/* buttons */}
      <div className="button-container">
        <ul className="buttons">{buttons}</ul>
      </div>

      {/* items */}
      <div className="item-list-container">
        <div className="title">{`List (${shownData.length})`}</div>
        <ul className="item-list">{items}</ul>
      </div>
    </div>
  );
}
