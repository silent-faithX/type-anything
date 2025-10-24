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
  document.body.addEventListener("click", () => {
    const input = document.getElementById("hiddenInput");
    input.focus(); // This triggers the virtual keyboard on mobile
  });
}

type();
reload();
vkeyboard();