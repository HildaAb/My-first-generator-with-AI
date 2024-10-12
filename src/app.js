function generateRecepy(event) {
  event.preventDefault();

  new Typewriter("#recepy", {
    strings: ["Budapest"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let userInputElement = document.querySelector("#user-input");
userInputElement.addEventListener("submit", generateRecepy);
