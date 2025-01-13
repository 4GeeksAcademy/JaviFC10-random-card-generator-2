/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cardGenerate() {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.querySelector("#top").innerHTML = randomSuit;
  document.querySelector("#bottom").innerHTML = randomSuit;
  document.querySelector("#number").innerHTML = randomValue;

  const isRed = randomSuit === "♥" || randomSuit === "♦";
  const colorClass = isRed ? "text-danger" : "text-dark";

  document.querySelector("#top").className = colorClass;
  document.querySelector("#bottom").className = colorClass;
  document.querySelector("#number").className = colorClass;
}


window.onload = function () {
  cardGenerate();
  document.querySelector("#newCard").addEventListener("click", cardGenerate);
};
