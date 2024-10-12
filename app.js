var screenDiv = document.getElementById("screen");
function getValue(value) {
  switch (value) {
    case "=":
      var res = eval(screenDiv.innerText);
      screenDiv.innerText = res;
      break;
    case "":
      screenDiv.innerText = "";
      break;
    case "back":
      screenDiv.innerText = screenDiv.innerText.slice(
        0,
        screenDiv.innerText.length - 1
      );
      break;
    default:
      screenDiv.innerText += value;
  }
}

function mytoggle() {
  var theme = document.body;
  theme.classList.toggle("dark-mode");

  var bw = document.getElementById("button");
  if (bw.innerHTML === "black mode") {
    bw.innerHTML = "white mode";

  } else {
    bw.innerHTML = "black mode";
  }
}
