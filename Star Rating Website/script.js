const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;

  ["click", "mouseover", "mouseout"].forEach(function (e) {
    stars[i].addEventListener(e, showRating);
  });
}
function showRating(e) {
  let type = e.type;
  var starValue = this.starValue;

  if (type === "click") {
    if (starValue == 1) {
      output.innerHTML = `You Rated This ${starValue} star.`;
    }
    if (starValue > 1) {
      output.innerHTML = `You Rated This ${starValue} stars.`;
    }
  }

  stars.forEach(function (element, index) {
    if (type === "click") {
      if (index < starValue) {
        element.classList.add("orange");
      } else {
        element.classList.remove("orange");
      }
    }

    if (type === "mouseover") {
      if (index < starValue) {
        element.classList.add("yellow");
      } else {
        element.classList.remove("yellow");
      }
    }

    if (type === "mouseout") {
      element.classList.remove("yellow");
    }
  });
}

function nextPage() {
  window.location.reload(); //calling this to just reload the page
}
