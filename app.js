const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", () => {
  const length = password.value.length;
  if (length <= 10) {
    background.style.filter = `blur(${20 - length * 2}px)`;
  }
});
