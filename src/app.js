/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["♥", "♦", "♣", "♠"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Generar valores aleatorios
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  // Seleccionar el contenedor de la carta
  let cardContainer = document.getElementById("card");

  // Crear elementos de la carta
  let topSuit = document.createElement("div");
  let value = document.createElement("div");
  let bottomSuit = document.createElement("div");

  // Añadir texto y estilos
  topSuit.textContent = randomSuit;
  value.textContent = randomValue;
  bottomSuit.textContent = randomSuit;

  topSuit.style.position = "absolute";
  topSuit.style.top = "10px";
  topSuit.style.left = "10px";
  topSuit.style.fontSize = "1.5em";

  bottomSuit.style.position = "absolute";
  bottomSuit.style.bottom = "10px";
  bottomSuit.style.right = "10px";
  bottomSuit.style.fontSize = "1.5em";
  bottomSuit.style.transform = "rotate(180deg)";

  value.style.margin = "auto";
  value.style.fontSize = "3em";
  value.style.position = "relative";

  // Color basado en el palo
  let cardColor = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
  topSuit.style.color = cardColor;
  bottomSuit.style.color = cardColor;
  value.style.color = cardColor;

  // Estilizar contenedor de la carta
  cardContainer.style.height = "300px";
  cardContainer.style.width = "200px";
  cardContainer.style.border = "2px solid black";
  cardContainer.style.borderRadius = "10px";
  cardContainer.style.display = "flex";
  cardContainer.style.justifyContent = "center";
  cardContainer.style.alignItems = "center";
  cardContainer.style.position = "relative";
  cardContainer.style.fontFamily = "Arial, sans-serif";

  // Centrar la carta horizontalmente
  cardContainer.style.margin = "20px auto"; // Añade margen superior e inferior y centra horizontalmente

  // Insertar elementos en el contenedor
  cardContainer.appendChild(topSuit);
  cardContainer.appendChild(value);
  cardContainer.appendChild(bottomSuit);
};
