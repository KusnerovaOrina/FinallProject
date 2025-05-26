const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const face = document.getElementById("face");
const form = document.getElementById("loginForm");
function checkInputs() {
    const filled = username.value.trim() !== "" && password.value.trim() !== "";
    if (filled) {
        loginBtn.disabled = false;
        loginBtn.classList.add("enabled");
        face.textContent = "\uD83D\uDE0A";
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.remove("enabled");
        face.textContent = "\uD83D\uDE10";
    }
}
username.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);
loginBtn.addEventListener("mouseover", ()=>{
    if (loginBtn.disabled) {
        const offsetX = Math.random() * 100 - 50;
        const offsetY = Math.random() * 50 - 25;
        loginBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        face.textContent = "\uD83D\uDE1C";
    }
});
loginBtn.addEventListener("mouseleave", ()=>{
    if (loginBtn.disabled) {
        loginBtn.style.transform = `translate(0, 0)`;
        face.textContent = "\uD83D\uDE10";
    }
});
form.addEventListener("submit", function(e) {
    e.preventDefault();
    face.textContent = "\uD83C\uDF89";
    alert("Logged in successfully!");
});

//# sourceMappingURL=FinallProject.09d9d7db.js.map
