const jokeEl = document.getElementById("joke");
const refreshBtn = document.getElementById("refresh-btn");

async function fetchJoke() {
  jokeEl.textContent = "🌀 Fetching joke...";
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch (error) {
    jokeEl.textContent = "😢 Oops! Couldn't fetch a joke. Try again.";
  }
}

refreshBtn.addEventListener("click", fetchJoke);
window.addEventListener("load", fetchJoke);
