const slider = document.querySelector("[data-passGen-slider]");
const value = document.querySelector("[data-passGen-output]");
const password = document.querySelector("[data-passGenPassword]");
const generateBtn = document.querySelector("[data-passGenBtn]");

slider.addEventListener("input", () => {
  value.textContent = slider.value;
});

function generateRandomCode(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let randomCode = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomCode += characters.charAt(randomIndex);
  }

  return randomCode;
}

const generate = generateBtn.addEventListener("click", () => {
  const length = parseInt(value.textContent, 10);
  const newPassword = generateRandomCode(length);
  password.textContent = newPassword;
});

export default {
  generate,
  generateRandomCode,
  addEventListener,
};
