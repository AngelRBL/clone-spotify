import { playlist, approach } from "./assets/data/index.js";
const concentrationContainer = document.getElementById(
  "container-card-concentration"
);
const playlistContainer = document.getElementById("containerPlaylists");

// function to add the card button
const createButton = (card) => {
  const button = document.createElement("button");

  button.innerHTML = '<i class="fa-solid fa-play"></i>';
  card.appendChild(button);

  button.style.display = "none";
  button.classList.add("btn-play");

  card.addEventListener("mouseover", () => {
    button.style.display = "block";
  });

  card.addEventListener("mouseout", () => {
    button.style.display = "none";
  });
};

// function where returns card container
const createCard = (song, className) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col-12");
  cardContainer.classList.add("col-md-6");
  cardContainer.classList.add("col-lg-3");

  const cardConcentration = document.createElement("div");
  cardConcentration.classList.add(className);

  const card = document.createElement("div");
  card.classList.add("card-content");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card-img");

  const image = document.createElement("img");
  image.setAttribute("src", song.img);
  image.setAttribute("alt", song.title);

  const title = document.createElement("h2");
  title.innerText = song.title;

  const text = document.createElement("p");
  text.innerText = song.description;

  const button = document.createElement("button");
  button.innerHTML = '<i class="fa-solid fa-play"></i>';

  imageContainer.appendChild(image);
  card.appendChild(imageContainer);
  card.appendChild(title);
  card.appendChild(text);

  cardConcentration.appendChild(card);
  createButton(cardConcentration);
  cardContainer.appendChild(cardConcentration);

  return cardContainer;
};

const getApproachList = () => {
  for (const song of approach) {
    concentrationContainer.appendChild(createCard(song, "card-concentration"));
  }
};

const getPlayList = () => {
  for (const song of playlist) {
    playlistContainer.appendChild(createCard(song, "card-spotify-playlists"));
  }
};

getApproachList();
getPlayList();
