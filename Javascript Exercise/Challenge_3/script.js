/**
 * Character Counter — counts characters and shows a warning past WARN_AT.
 */
(function () {
  "use strict";

  const MAX_CHARS = 120;
  const WARN_AT = 100;

  const textarea = document.getElementById("userText");
  const charCountEl = document.getElementById("charCount");
  const warningEl = document.getElementById("warning");

  function updateCounter() {
    let text = textarea.value;

    if (text.length > MAX_CHARS) {
      text = text.slice(0, MAX_CHARS);
      textarea.value = text;
    }

    const count = text.length;
    charCountEl.textContent = "Characters typed: " + count;

    if (count > WARN_AT) {
      charCountEl.classList.add("over-limit");
      warningEl.textContent =
        "You have exceeded 100 characters. Maximum is " + MAX_CHARS + " characters.";
      warningEl.hidden = false;
    } else {
      charCountEl.classList.remove("over-limit");
      warningEl.textContent = "";
      warningEl.hidden = true;
    }
  }

  textarea.addEventListener("input", updateCounter);
  updateCounter();
})();
