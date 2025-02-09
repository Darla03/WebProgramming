document.addEventListener("DOMContentLoaded", function () {
    let output = document.getElementById("output");
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let firstName = document.getElementById("first").value.trim();
        let lastName = document.getElementById("last").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let age = document.getElementById("age").value.trim();
        let gender = document.querySelector('input[name="gender"]:checked');
        let country = document.getElementById("country").value;
        let termsAccepted = document.getElementById("terms").checked;

        
        output.innerHTML = `
            <h3>Updated Form: </h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Country:</strong> ${country}</p>
        `;

        console.log("Output updated:", output.innerHTML);
    });
});

