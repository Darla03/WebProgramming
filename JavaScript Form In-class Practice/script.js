document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let output = document.getElementById("output");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form submission

        let name = document.getElementById("first").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value.trim();

        let emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
        let valid = true;
        let messages = [];

        // Name validation
        if (!name) {
            messages.push("Name is required. Don't forget!");
            valid = false;
        }

        // Email validation
        if (!emailPattern.test(email)) {
            messages.push( "Please enter a valid email address (ex. ImSuperCool@gmail.com).");
            valid = false;
        }


        if (valid) {
            output.innerHTML = `
                <h3 style="color: green;">Form Submitted Successfully!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Age:</strong> ${age}</p>`;
            form.reset();
        } else {
            output.innerHTML = `<p style="color: red;">${messages.join("<br>")}</p>`;
        }
    });
});
