import { EmojiButton } from "@joeattardi/emoji-button";

/* Heart button */
const elementLikeCounter = document.querySelector(".like-counter"); // like counter span
const elementHeartIconContainer = document.querySelector(".like"); // heart btn parent ctn
const elementHeartIcon = document.querySelector(".icon-heart");

elementHeartIconContainer.addEventListener("click", heartIconClick);

let likeCounter = 9;
elementLikeCounter.textContent = likeCounter;

function heartIconClick() {
  elementHeartIcon.classList.toggle("heart-toggle");
  elementHeartIcon.classList.add("heart-animation");

  if (elementHeartIcon.classList.contains("heart-toggle")) {
    likeCounter++;
  } else {
    likeCounter--;
  }
  elementLikeCounter.textContent = likeCounter;

  setTimeout(() => {
    elementHeartIcon.classList.remove("heart-animation");
  }, 350); // hack(?) same as animation duration css
}

/* Emoji library button */

const button = document.querySelector(".icon-emoji");
const inputText = document.querySelector(".container-comment-input");
const picker = new EmojiButton();

picker.on("emoji", (selection) => {
  inputText.value += selection.emoji;
});

button.addEventListener("click", () => {
  if (picker.pickerVisible) {
    picker.hidePicker();
  } else {
    picker.showPicker(button);
  }
});

/* Form Submit */
const elementForm = document.querySelector(".container-comment");
const elementCommentContainer = document.querySelector(".comment-container");
const elementRelativeIconContainer = document.querySelector(
  ".relative-icon-container"
);
elementForm.addEventListener("submit", (event) => submitFunction(event));

function submitFunction(event) {
  event.preventDefault();
  const inputValue = event.target.elements[0].value;
  renderComment(inputValue);
  elementForm.reset();
  // we can all in one here but better have separate below:
}

// specificly create element -> add to DOM
function renderComment(inputValue) {
  const createdTextElement = document.createElement("p");
  createdTextElement.textContent = inputValue;
  elementCommentContainer.appendChild(createdTextElement);
}
