const textBox = document.getElementById("textBox");

document.getElementById("redBtn").addEventListener("click", () => {
  textBox.textContent = "Red button is clicked";
  textBox.style.backgroundColor = "red";
  textBox.style.color = "white";
});

document.getElementById("yellowBtn").addEventListener("click", () => {
  textBox.textContent = "Yellow button is clicked";
  textBox.style.backgroundColor = "yellow";
  textBox.style.color = "black";
});

document.getElementById("blueBtn").addEventListener("click", () => {
  textBox.textContent = "Blue button is clicked";
  textBox.style.backgroundColor = "blue";
  textBox.style.color = "white";
});