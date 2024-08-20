function displayWords(response) {
  const wordsDiv = document.querySelector("#words");
  wordsDiv.innerHTML = ""; // Clear previous content

  // Create the Typewriter effect for the main message
  new Typewriter(wordsDiv, {
    strings: response.data.answer.replace(/[\u{1F600}-\u{1F64F}]/gu, ""), // Remove any emoji from the main message
    autoStart: true,
    cursor: "",
    delay: 20,
    onComplete: () => {
      // After the Typewriter effect completes, display the emoji and signature
      displayEmojiAndSignature(response.data.answer);
    },
  });
}

function displayEmojiAndSignature(answer) {
  const wordsDiv = document.querySelector("#words");

  
  const emoji = answer.match(/[\u{1F600}-\u{1F64F}]/gu); 
  const emojiDiv = document.createElement("div");
  emojiDiv.innerHTML = `<br/><span>${
    emoji || "🌟"
  }</span><br/><strong>~ SheCodes AI</strong>`;

 
  wordsDiv.appendChild(emojiDiv);
}

function generateWords(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o8145f06881d09401ad03t8b0f09e589";

  let context = `Please respond politely and provide a concise, encouraging message. Ensure that the message is positive, uplifting, and free from inappropriate language. Each message should be unique and not duplicate or repeat any previous responses. The message must include the word "${instructionsInput.value}". Thank you.`;
  let word = instructionsInput.value;
  let prompt = `Generate a new, encouraging message using the word "${word}". The message should end with an appropriate emoji that represents the word "${word}", and sign off with "<br/><strong>~ SheCodes AI</strong>" without using any quotation marks around SheCodes AI.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWords);
}

let wordsFormElement = document.querySelector("#words-form");
wordsFormElement.addEventListener("submit", generateWords);
