document.getElementById("changeText").addEventListener("click", function () {
  document.getElementById("content").textContent = "Text Changed!";
});

document.getElementById("highlight").addEventListener("click", function () {
  document.getElementById("content").classList.toggle("highlight");
});
