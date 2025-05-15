function checkAge() {
    let age = parseInt(document.getElementById("ageInput").value);
    let result = document.getElementById("result");

if (age < 18) {
    result.textContent = "GO HOME YOU PUP!";
    result.style.color = "orange";
} else {
     result.textContent = "WELCOME BIG DOG!";
    result.style.color = "green";
}
}