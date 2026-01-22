const inputIds = ["name", "email", "subject", "message"];
const contactForm = document.getElementById("contact-form");
const formResult = document.getElementById("form-result");

const formInputValidations = {
  name: {
    input: document.getElementById("name"),
    helpText: document.getElementById("name-help"),
    regex: /^[a-zA-Z ]+$/,
    warning: "Name is required",
    defaultText: "",
  },
  email: {
    input: document.getElementById("email"),
    helpText: document.getElementById("email-help"),
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    warning: "Please provide a valid email address",
    defaultText: "",
  },
  subject: {
    input: document.getElementById("subject"),
    helpText: document.getElementById("subject-help"),
    regex: /^[a-zA-Z]+[a-zA-Z0-9 ]{2,}$/,
    warning: "Subject must be at least 3 characters long and start with a letter",
    defaultText: "",
  },
  message: {
    input: document.getElementById("message"),
    helpText: document.getElementById("message-help"),
    regex: /^.{10,}$/,
    warning: "Message must be at least 10 characters long",
    defaultText: "",
  },
};

// Store default help texts
for (const key in formInputValidations) {
  const field = formInputValidations[key];
  if (field.input && field.helpText) {
    field.defaultText = field.helpText.textContent;
  }
}

// Restore default help texts when new input is generated
for (const key in formInputValidations) {
  const field = formInputValidations[key];
  if (field.input && field.helpText) {
    field.input.addEventListener("input", () => {
      field.helpText.textContent = field.defaultText;
    });
  }
}

function validateInputs() {
  let failed = false;
  for (const key in formInputValidations) {
    const field = formInputValidations[key];
    if (!field.input || !field.helpText) {
      failed = true;
      continue;
    }

    const value = field.input.value.trim();
    if (!field.regex.test(value)) {
      field.helpText.textContent = field.warning;
      failed = true;
    }
  }

  formResult.style.visibility = failed ? "visible" : "hidden";
  if (!failed) {
    const email = "maya.chen.dev@example.com";
    const subject = encodeURIComponent(document.getElementById("subject").value.trim());
    const body = encodeURIComponent(
      `Name: ${document.getElementById("name").value.trim()}\n\n` +
        `Email: ${document.getElementById("email").value.trim()}\n\n` +
        `Message:\n${document.getElementById("message").value.trim()}`,
    );
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
  });
}
