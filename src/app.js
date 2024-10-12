function displayAnswer(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let newInputElement = document.querySelector("#new-input");
  let apiKey = "0ac953t0o20a266a6d9990b5f3f49241";
  let prompt = `Generate a national dish from ${newInputElement.value}`;
  let context =
    "You have traveled around the whole world and saw many national dishes in diffrent part of the world.Please provide the recipe for one national dish from Italy.Please answer short and consist. Please answer in basic HTML form and don´t write ````html.Please do not write outside the container that has max-width 900px";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = "🕒 Generating answer. Please wait.🕒";

  axios.get(apiUrl).then(displayAnswer);
}

let userInputElement = document.querySelector("#user-input");
userInputElement.addEventListener("submit", generateRecipe);
