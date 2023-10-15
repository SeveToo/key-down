const box__code = document.querySelectorAll(".box__code");

window.addEventListener("keyup", function (e) {
  box__code[0].textContent = e.key;
  box__code[1].textContent = e.keyCode;
  box__code[2].textContent = e.code;
  console.log(e.code);
});
