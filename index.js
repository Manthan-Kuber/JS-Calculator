window.onload = () => {
  let calcScreen = document.querySelector("main > input");
  let calcBtnList = Array.from(document.querySelectorAll(".calc-btn"));

  calcBtnList.forEach((button) => {
    button.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "RESET":
          calcScreen.value = "";
          break;
        case "DEL":
          if (calcScreen.value)
            calcScreen.value = calcScreen.value.slice(0, -1);
          break;
        case "=":
          try{
            calcScreen.value = eval(calcScreen.value);
          }
          catch{
              calcScreen.value = "ERROR!"
          }
          break;
        default:
          calcScreen.value += e.target.innerText;
      }
    });
  });
};
