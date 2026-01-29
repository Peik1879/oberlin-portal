const btn = document.getElementById("btnText");

let big = false;
btn.addEventListener("click", () => {
  big = !big;
  document.documentElement.style.fontSize = big ? "120%" : "100%";
  btn.textContent = big ? "Schrift normal" : "Schrift größer";
});
