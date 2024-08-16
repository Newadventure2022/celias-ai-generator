function displayWords(response) {
  console.log("words generated");
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
  let context = `Please respond politely and provide a concise encouraging message. Ensure that the message is positive, uplifting, and free from inappropriate language. Each message should be unique and not duplicate any previous responses. The message should include the word "${instructionsInput.value}". Thank you.`;
  let prompt = `Generate a new encouraging message using the word ${instructionsInput.value} and sign the words with <br/> <strong> '~ SheCodes AI'</strong>, but please do not put '' around SheCodes AI`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayWords);
}
let wordsFormElement = document.querySelector("#words-form");
wordsFormElement.addEventListener("submit", generateWords);
