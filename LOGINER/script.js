const form = document.querySelector("#registerForm");
const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector(".toggle-password");
const passwordMeter = document.querySelector(".password-meter");
const toast = document.querySelector("#successToast");

const fields = {
  name: {
    input: document.querySelector("#name"),
    validate: value => value.trim().length >= 3 || "Digite seu nome completo (mínimo de 3 caracteres)."
  },
  email: {
    input: document.querySelector("#email"),
    validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) || "Informe um e-mail válido."
  },
  password: {
    input: passwordInput,
    validate: value => (value.length >= 8 && /[A-Za-z]/.test(value) && /\d/.test(value)) || "Use 8 caracteres ou mais, incluindo letras e números."
  },
  age: {
    input: document.querySelector("#age"),
    validate: value => (Number.isInteger(Number(value)) && Number(value) >= 18 && Number(value) <= 120) || "Informe uma idade entre 18 e 120 anos."
  },
  gender: {
    input: document.querySelector("#gender"),
    validate: value => Boolean(value) || "Selecione uma opção."
  }
};

function validateField(key) {
  const config = fields[key];
  const result = config.validate(config.input.value);
  const field = config.input.closest(".field");
  const error = document.querySelector(`#${key}Error`);
  const isValid = result === true;

  field.classList.toggle("invalid", !isValid);
  field.classList.toggle("valid", isValid);
  config.input.setAttribute("aria-invalid", String(!isValid));
  config.input.setAttribute("aria-describedby", `${key}Error`);
  error.textContent = isValid ? "" : result;
  return isValid;
}

Object.entries(fields).forEach(([key, config]) => {
  config.input.addEventListener("blur", () => validateField(key));
  config.input.addEventListener("input", () => {
    if (config.input.closest(".field").classList.contains("invalid")) validateField(key);
  });
});

passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
  passwordToggle.setAttribute("aria-label", isVisible ? "Mostrar senha" : "Ocultar senha");
  passwordToggle.textContent = isVisible ? "◉" : "◌";
  passwordInput.focus();
});

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  let strength = 0;
  if (value.length >= 8) strength++;
  if (/[A-Za-z]/.test(value) && /\d/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value) && value.length >= 10) strength++;
  passwordMeter.dataset.level = String(strength);
});

function validateTerms() {
  const terms = document.querySelector("#terms");
  const error = document.querySelector("#termsError");
  const isValid = terms.checked;
  error.textContent = isValid ? "" : "Você precisa aceitar os termos para continuar.";
  terms.setAttribute("aria-invalid", String(!isValid));
  return isValid;
}

document.querySelector("#terms").addEventListener("change", validateTerms);

form.addEventListener("submit", event => {
  event.preventDefault();
  const results = Object.keys(fields).map(validateField);
  const isValid = results.every(Boolean) && validateTerms();

  if (!isValid) {
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
    form.classList.remove("shake");
    void form.offsetWidth;
    form.classList.add("shake");
    return;
  }

  const button = form.querySelector(".submit-button");
  const originalContent = button.innerHTML;
  button.classList.add("loading");
  button.innerHTML = "<span>Validando...</span>";

  window.setTimeout(() => {
    button.classList.remove("loading");
    button.innerHTML = originalContent;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 4000);
  }, 700);
});
