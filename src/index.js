function displayWords(response) {
  console.log(response.data.answer);

  const wordsDiv = document.querySelector("#words");

 
  wordsDiv.innerHTML = response.data.answer;
}

function generateWords(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o8145f06881d09401ad03t8b0f09e589";

  let context = `Please respond politely and provide a concise, encouraging message. Ensure that the message is positive, uplifting, and free from inappropriate language. Each message should be unique and not duplicate or repeat any previous responses. The message must include the word "${instructionsInput.value}". Thank you.`;
  let word = instructionsInput.value;
  let prompt = `Generate a new, encouraging message using the word "${word}". Choose an appropriate emoji that corresponds to the word "${word}" and place it at the end of the message, with enough space around it to ensure it displays correctly. Sign the message with <br/><strong>~ SheCodes AI</strong> without using any quotation marks around SheCodes AI.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWords);
}

let wordsFormElement = document.querySelector("#words-form");
wordsFormElement.addEventListener("submit", generateWords);
