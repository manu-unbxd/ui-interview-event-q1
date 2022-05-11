// Import stylesheets
import './style.css';

    const root = document.getElementById("rootWrapper");
    function btnAlert(number) {
      console.log(number);
    }
    function createButtons(count) {
      console.log(count);
      let btns = ``;
      for (let i = 0; i < count; i++) {
        btns += `<button id="${i}">${i}</button>`;
      }
      root.innerHTML = btns;
    }
    document
      .getElementById("createBtns")
      .addEventListener("click", function () {
        createButtons(100);
      });
    root.addEventListener(
      "click",
      function (e) {
        btnAlert(e.target.id);
      },
      true
    );