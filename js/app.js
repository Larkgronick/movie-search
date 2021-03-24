import {
  input,
  loader,
  keyboardImage,
  send,
  error,
  prev,
  next,
  slider,
  modal,
  close,
} from "./constants.js";

import init from "./gen.js";

import generateKeyboard from "./keyboard.js";

import { isCyrillic, clearData } from "./utils.js";

init();

// function isCyrillic(str) {
//   return /[а-яё]/i.test(str);
// }

// function clearData() {
//   slider.textContent = '';
// }

// GET DATA FROM API

let WORD = "dream";
let PAGE = "1";
const KEY = "22a0614a"; // 479a85a5

async function getMovies(word, page) {
  if (word.length > 0) {
    const info = `https://www.omdbapi.com/?apikey=${KEY}&s=${word}&page=${page}`;
    const responseInfo = await fetch(info);
    const globalSearch = await responseInfo.json();
    return globalSearch;
  }
  return 0;
}

function createPosters(movieData, responses) {
  movieData.forEach((movie, index) => {
    const link = document.createElement("a");
    slider.append(link);
    link.setAttribute(
      "href",
      `https://www.imdb.com/title/${movie.imdbID}/videogallery/`
    );
    const slide = document.createElement("div");
    link.append(slide);
    slide.className = "slide";
    const Title = document.createElement("h2");
    Title.className = "title";
    slide.append(Title);
    Title.innerHTML = movie.Title;
    const poster = document.createElement("img");
    slide.append(poster);
    if (movie.Poster === "N/A") {
      poster.src = "../assets/no_poster.jpg";
    } else {
      poster.src = movie.Poster;
    }
    poster.className = "poster-image";
    const Year = document.createElement("h2");
    slide.append(Year);
    Year.innerHTML = movie.Year;
    const rate = document.createElement("div");
    rate.className = "rate";
    slide.append(rate);
    const star = document.createElement("img");
    rate.append(star);
    star.src = "assets/star.png";
    const rating = document.createElement("h3");
    rating.className = "rating";
    rate.append(rating);
    if (responses[index] === "N/A") {
      rating.innerHTML = "no rate";
    } else {
      rating.innerHTML = responses[index];
    }
  });
}

function getRatings(movieData, page) {
  const movieTitles = movieData.map((movie) => movie.Title);
  const rateReq = movieTitles.map((title) =>
    fetch(`https://www.omdbapi.com/?apikey=${KEY}&t=${title}&page=${page}`)
  );
  Promise.all(rateReq)
    .then((responses) => responses)
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((responses) => responses.map((movie) => movie.imdbRating))
    .then((responses) => responses)
    .then((responses) => {
      createPosters(movieData, responses);
    });
}

getMovies(WORD, PAGE).then((value, number) => {
  const movieData = value.Search;
  PAGE = number;
  getRatings(movieData, PAGE);
});

/* BUTTON INTERACTIONS */

function userSearch() {
  prev.style.display = "none";
  next.style.display = "block";
  loader.style.display = "block";
  error.innerHTML = "";
  slider.style.transition = "none";
  slider.style.transform = "translateX(0px)";
  const searchWord = input.value;
  WORD = input.value;
  PAGE = "1";
  getMovies(searchWord, PAGE).then((value) => {
    if (searchWord.length > 0) {
      const movieData = value.Search;
      PAGE = "1";
      clearData();
      if (value.Response === "True" && isCyrillic(searchWord) === false) {
        error.style.color = "black";
        error.innerHTML = `Results for: "${searchWord}"`;
        getRatings(movieData, PAGE);
      } else if (value.Response === "True" && isCyrillic(searchWord) === true) {
        error.style.color = "black";
        error.innerHTML = `Showing results for: "${searchWord}"`;
        getRatings(movieData, PAGE);
      } else {
        error.style.color = "red";
        next.style.display = "none";
        prev.style.display = "none";
        error.innerHTML = `No results for: "${searchWord}"`;
      }
      loader.style.display = "none";
    } else {
      clearData();
      error.style.color = "red";
      next.style.display = "none";
      prev.style.display = "none";
      error.innerHTML = "Empty search. Please, entry something ";
    }
  });
}

send.addEventListener("click", userSearch);

let counter = 0;
let size = slider.clientWidth;

window.addEventListener("resize", () => {
  size = slider.clientWidth;
  if (size < 800) {
    keyboardImage.style.display = "none";
  } else {
    keyboardImage.style.display = "block";
  }
});

function checkLastPosition(totalWidth) {
  if (counter === 0) {
    prev.style.display = "none";
  } else if (totalWidth < size * (counter + 1)) {
    next.style.display = "none";
  } else {
    prev.style.display = "block";
    next.style.display = "block";
  }
}
checkLastPosition();

next.addEventListener("click", () => {
  counter += 1;
  slider.style.transition = "all 1.5s";
  slider.style.transform = `translateX(${-size * counter}px)`;
  PAGE = counter + 2;
  getMovies(WORD, PAGE).then((value) => {
    const movieData = value.Search;
    const someMore = value.Response;
    if (someMore === "True") {
      getRatings(movieData, PAGE);
      checkLastPosition();
    } else {
      const slideWidth = Array.from(document.getElementById("slider").children);
      let totalWidth = 0;
      for (const index of slideWidth.keys()) {
        totalWidth += slideWidth[index].offsetWidth;
      }
      checkLastPosition(totalWidth);
    }
  });
});

prev.addEventListener("click", () => {
  slider.style.transition = "all 1.5s";
  counter -= 1;
  slider.style.transform = `translateX(${-size * counter}px)`;
  checkLastPosition();
});

/* keyboard */
generateKeyboard();

keyboardImage.onclick = function openKeyboard() {
  modal.style.display = "block";
};

close.onclick = function crossClose() {
  modal.style.display = "none";
};

window.onclick = function asideClose(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
