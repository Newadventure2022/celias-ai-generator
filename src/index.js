function generateMeme(event) {
  event.preventDefault();

  new Typewriter("#meme-result", {
    strings: "The meme will go here",
    autoStart: true,
    cursor: "",
    delay: 20,
  });
  let memeResultElement = document.querySelector("#image-result");
  memeResultElement.innerHTML = " The image will go here";
}

let memeFormElement = document.querySelector("#meme-form");
memeFormElement.addEventListener("submit", generateMeme);
