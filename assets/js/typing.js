/**
 * Script for the typing effect in the home section of the website
 *
 * @description
 * This script is used to the typing effect in the home section of the website. The text is typed out character by character
 * with a delay between each character. The cursor is also blinked with a delay. The cursor is also styled to be a green color.
 *
 * @author Gonzalo Quedena
 * @version 1.0.0
 * @since 2025-12-06
 */

document.addEventListener("DOMContentLoaded", function () {
  const textToType = "Gonzalo Quedena";
  const textElement = document.getElementById("typewriter-text");
  const cursorElement = document.getElementById("typewriter-cursor");

  let charIndex = 0;
  const typingDelay = 150;
  const cursorDelay = 750;

  function type() {
    if (charIndex < textToType.length) {
      textElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
  }

  function blinkCursor() {
    cursorElement.style.visibility =
      cursorElement.style.visibility === "hidden" ? "visible" : "hidden";
  }

  textElement.textContent = "";
  cursorElement.textContent = "|";
  cursorElement.style.display = "inline";
  cursorElement.style.color = "var(--color-accent-500)";

  setInterval(blinkCursor, cursorDelay);
  setTimeout(type, typingDelay);
});
