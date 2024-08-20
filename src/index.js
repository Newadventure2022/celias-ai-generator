function displayWords(response) {
  let fullMessage = response.data.answer;

  let emojiMatch = fullMessage.match(/[\p{Emoji}]/gu);
  let emoji = emojiMatch ? emojiMatch[emojiMatch.length - 1] : "";
  let message = fullMessage.replace(emoji, "");

  let wordsElement = document.querySelector("#words");
  wordsElement.textContent = "";

  new Typewriter("#words", {
    strings: message,
    autoStart: true,
    cursor: "",
    delay: 20,
  });

  displayEmoji(emoji);
}

function displayEmoji(emoji) {
  let emojiElement = document.querySelector("#emoji");
  emojiElement.innerHTML = emoji;
}

function generateWords(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o8145f06881d09401ad03t8b0f09e589";

  let context = `Please respond politely and provide a concise, encouraging message. Ensure that the message is positive, uplifting, and free from inappropriate language. Each message should be unique and not duplicate or repeat any previous responses. The message must include the word "${instructionsInput.value}". Thank you.`;
  let word = instructionsInput.value;
  let prompt = `Generate a new, encouraging message using the word "${word}". Choose an appropriate emoji that corresponds to the word "${word}" and place it at the end of the message, with enough space around it to ensure it displays correctly. Sign the message with <br/><strong>~ SheCodes AI</strong> without using any quotation marks around SheCodes AI.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWords);
}

let wordsFormElement = document.querySelector("#words-form");
wordsFormElement.addEventListener("submit", generateWords);
