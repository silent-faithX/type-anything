let txt = document.querySelector('h1');
let content = document.querySelector('#content');
let restart = document.querySelector('#rbtn');
let tmp = '';

function type() {
  window.addEventListener("keydown", function (res) {
    // Ignore keys like Shift, Ctrl, Alt
    if (res.key.length > 1 && res.key !== ' ') return;

    if (res.key === " ") {
      if (tmp.trim() !== "") {
        // Print the collected word
        content.innerText += tmp + " ";
      }
      // Reset for next word
      tmp = '';
      txt.innerText = "Space";
    } else {
      tmp += res.key;
      txt.innerText = tmp;
    }
  });
}

// Page reload method 
function reload() {
  restart.addEventListener("click", function () {
    window.location.reload();
  });
}

// Virtual keyborad method on mobile
function vkeyboard() {
  // Ensure the hidden input exists
  let input = document.getElementById("hiddenInput");
  if (!input) {
    input = document.createElement("input");
    input.type = "text";
    input.id = "hiddenInput";
    input.style.position = "absolute";
    input.style.opacity = "0";
    input.style.height = "0";
    input.style.width = "0";
    input.style.zIndex = "-1";
    document.body.appendChild(input);
  }

  document.body.addEventListener("click", () => {
    input.focus(); // This triggers the virtual keyboard on mobile
  });
}

type();
reload();
vkeyboard();