const inputIds = ["name", "email", "subject", "message"];
const contactForm = document.querySelector("#contact-form");

const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subjectRegex = /^[a-zA-Z]+[a-zA-Z0-9 ]{2,}$/;
const messageRegex = /^.{10,}$/;

function validateInputs() {
  inputIds.forEach((id) => {
    const input = document.getElementById(id);
    const helpText = document.getElementById(`${id}-help`);
    if (!input || !helpText) return;

    const value = input.value.trim();

    if (id === "name") {
      if (!nameRegex.test(value)) {
        helpText.textContent = "Name is required";
      }
    } else if (id === "email") {
      if (!emailRegex.test(value)) {
        helpText.textContent = "Please provide a valid email address";
      }
    } else if (id === "subject") {
      if (!subjectRegex.test(value)) {
        helpText.textContent = "Subject must be at least 3 characters long and start with a letter";
      }
    } else if (id === "message") {
      if (!messageRegex.test(value)) {
        helpText.textContent = "Message must be at least 10 characters long";
      }
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
  });
}

// Restore default help texts when new input is generated
const defaultHelpTexts = {};
inputIds.forEach((id) => {
  const helpElem = document.getElementById(`${id}-help`);
  defaultHelpTexts[id] = helpElem ? helpElem.textContent : "";
});

inputIds.forEach((id) => {
  const input = document.getElementById(id);
  const helpText = document.getElementById(`${id}-help`);
  if (!input || !helpText) return;
  input.addEventListener("input", () => {
    helpText.textContent = defaultHelpTexts[id];
  });
});
