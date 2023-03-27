var hasRead = document.querySelectorAll(".read").length;
var boxNumber = document.querySelectorAll(".box").length;
document.querySelector(".number").innerHTML = boxNumber;
var defaultNum = boxNumber - hasRead;

function handleRead(element) {
  element.classList.add("read");
  var dots = element.querySelector("span.dot");
  dots.classList.remove("dot");
  defaultNum -= 1;
  document.querySelector(".number").innerHTML = defaultNum;
}

function readAll() {
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.classList.add("read"));
  var dots = document.querySelectorAll("span.dot");
  dots.forEach((dot) => dot.classList.remove("dot"));
  document.querySelector(".number").innerHTML = 0;
}
