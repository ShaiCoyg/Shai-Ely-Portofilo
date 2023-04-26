function typeText() {
  const txtOne = `Hello,`;
  const outputDivOne = document.getElementById("hello");
  const txtTwo = `I'm Shai.`;
  const outputDivTwo = document.getElementById("im-shai");
  const txtThree =`A Tech Enthusiast.`;
  const outputDivThree = document.getElementById("summary");
  var empty = "";
  var txt = empty.concat(txtOne, txtTwo, txtThree);
  let i = 0;
  const timerId = setInterval(() => {
    if (i < txtOne.length) {
      outputDivOne.innerHTML += txt.charAt(i);
      i++;
    } else {
      if (i < txtOne.length + txtTwo.length) {
        outputDivTwo.innerHTML += txt.charAt(i);
        i++;
      } else {
        if (i < txtOne.length + txtTwo.length + txtThree.length) {
          outputDivThree.innerHTML += txt.charAt(i);
          i++;
        } else {
          clearInterval(timerId);
          fadeIn(true);
        }
      }
    }
  }, 80);
}

function fadeIn(flag) {
  const show = document.getElementById("show");
  show.classList.toggle("show-now");
}

typeText();
