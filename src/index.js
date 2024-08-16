function generateWords(event) {
  event.preventDefault();

  new Typewriter("#words-result", {
    strings: "The Encouraging Words Will Go Here",
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

let wordsFormElement = document.querySelector("#words-form");
wordsFormElement.addEventListener("submit", generateWords);
