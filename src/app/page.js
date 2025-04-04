"use client";

import style from "./page.scss";
import Header from "./Component/Header";
import Button from "./Component/Button";
import data from "./data.json";

import Item from "./Component/Item";
import { useState } from "react";

export default function Home() {
  const [clickedButton, setClickButton] = useState(Object.keys(data)[0]);
  const [shownData, setShownData] = useState(data[clickedButton]);

  function handleButtonOnClick(event) {
    // if click another button
    if (!event.target.classList.contains("clicked")) {
      // remove clicked item
      let clickedItem = document.querySelector(".item-list li.clicked");
      if (clickedItem) {
        clickedItem.classList.remove("clicked");
      }
      setClickButton(event.target.id);
      setShownData(data[event.target.id]);
    }
  }

  function handleItemOnClick(event) {
    // remove clicked item
    let clickedItem = document.querySelector(".item-list li.clicked");
    if (clickedItem) {
      clickedItem.classList.remove("clicked");
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
