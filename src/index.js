function displayWords(response) {
  new Typewriter("#words", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
  
}

function generateWords(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o8145f06881d09401ad03t8b0f09e589";

  let context = `Please respond politely and provide a concise encouraging message. Ensure that the message is positive, uplifting, and free from inappropriate language. Each message should be unique and not duplicate or repeat any previous responses. The message should include the word "${instructionsInput.value}". Thank you.`;

  let word = instructionsInput.value;

  let prompt = `Generate a new encouraging message using the word "${word}". Also, choose an emoji that represents the word "${word}" and place it after the words. Sign the words with <br/> <strong> '~ SheCodes AI'</strong>, but please do not put '' or any quotes around SheCodes AI.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWords);
}

let wordsFormElement = document.querySelector("#words-form");
wordsFormElement.addEventListener("submit", generateWords);
