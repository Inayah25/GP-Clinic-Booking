// ---- Navigation ----
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alert(`You clicked on ${link.textContent}`);
  });
});

// ---- Doctor Cards ----
document.querySelectorAll(".doctor-card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`You selected ${card.dataset.name}`);
    localStorage.setItem("selectedDoctor", card.dataset.name); // save doctor choice
  });
});

// ---- Book Appointment Button ----
const bookBtn = document.getElementById("bookBtn");
if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    alert("Redirecting to your profile...");
    window.location.href = "profile.html"; // go to profile page
  });
}

// ---- Login / Signup ----
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    alert("Redirecting to login page...");
  });
}

if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    alert("Redirecting to signup page...");
  });
}
