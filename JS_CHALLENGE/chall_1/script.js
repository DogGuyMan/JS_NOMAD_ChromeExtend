// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const bodyElement = document.querySelector("body");
const titleElement = bodyElement.querySelector("h2");

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handlemouseEnter: function (e) {
    //console.log(e);
    titleElement.innerText = "The mouse is here!";
    titleElement.style.color = colors[0];
  },
  handlemouseLeave: function (e) {
    //console.log(e);
    titleElement.innerText = "The mouse is gone!";
    titleElement.style.color = colors[1];
  },
  handleResizeBrowser: function (e) {
    //console.log();
    titleElement.innerText = "you just resized!";
    titleElement.style.color = colors[2];
  },
  handleRightClick: function (e) {
    //console.log(e.button);
    if (e.button === 2) {
      titleElement.innerText = "That was a right click!";
      titleElement.style.color = colors[4];
    }
  }
};

titleElement.addEventListener("mouseenter", superEventHandler.handlemouseEnter);
titleElement.addEventListener("mouseleave", superEventHandler.handlemouseLeave);
window.addEventListener("resize", superEventHandler.handleResizeBrowser);
window.addEventListener("mousedown", superEventHandler.handleRightClick);
