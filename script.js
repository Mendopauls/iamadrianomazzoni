const navToggle = document.querySelector(".nav-toggle");
const bodyElement = document.body;
const navLinks = document.querySelectorAll(".main-nav a");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = bodyElement.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    bodyElement.classList.remove("nav-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  });
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// GitHub Pages static form fallback.
// Opens the user's email app with the application fields already filled in.
const applicationForm = document.querySelector("#iam-application");

if (applicationForm) {
  applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(applicationForm);

    const fields = [
      ["Full name", data.get("name")],
      ["Email", data.get("email")],
      ["Instagram", data.get("instagram")],
      ["Age", data.get("age")],
      ["Country", data.get("location")],
      ["Height", data.get("height")],
      ["Weight", data.get("weight")],
      ["Main objective", data.get("goal")],
      ["Natural / Enhanced", data.get("status")],
      ["Training experience", data.get("experience")],
      ["Competition experience", data.get("competition")],
      ["Why do you want to work with IAM?", data.get("why_iam")],
      ["What is currently holding you back?", data.get("obstacle")],
      ["Where do you see yourself in two years?", data.get("future")]
    ];

    const messageBody = fields
      .map(([label, value]) => `${label}: ${value || "-"}`)
      .join("\n\n");

    const subject = encodeURIComponent("IAM Coaching Application");
    const mailBody = encodeURIComponent(messageBody);
    const to = "info@iamadrianomazzoni.com";

    window.location.href = `mailto:${to}?subject=${subject}&body=${mailBody}`;
  });
}
