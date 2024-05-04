
function generateHaiku(event) {
    event.preventDefault();

  new Typewriter("#haiku", {
    strings:
      "Stark, the branches wait, not dead, but in quiet song. Blossom's kiss to come.",
    autoStart: true,
    cursor: "",
    delay: 1,
    cursor: " ",
  });
}
let poemFormElement = document.querySelector("#haiku-generator");
poemFormElement.addEventListener("submit", generateHaiku);