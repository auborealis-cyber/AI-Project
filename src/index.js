function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
    cursor: " ",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4f0tbb34c0ea3deo2dcac0706f4ad715";
  let context =
    "You are a polite, romantic, kind, optimistic, funny haiku expert. Generate haikus in three sepearate lines with a <br /> in basic HTML. No emojis inside the haiku. Make sure to follow user instructions. Sign haiku at the end with on separate line'-SheCodes AI' <br /> on a separate line inside a <strong> element and end with a '🌸' by itself on a <br/>";
  let prompt = `User instructions: provide a haiku based on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#haiku");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> Generating haiku about ${instructionsInput.value}🌸🌸🌸</div>`;

    axios.get(apiUrl).then(displayHaiku);
}

let poemFormElement = document.querySelector("#haiku-generator");
poemFormElement.addEventListener("submit", generateHaiku);
