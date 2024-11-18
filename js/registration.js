document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const phoneEmail = document.getElementById("phoneEmail").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;
        const errorText = document.getElementById("errorText");

        if (password !== confirmPassword) {
            errorText.textContent = "Пароли не совпадают";
            errorText.style.display = "block";
            document.getElementById("confirmPassword").style.borderColor =
                "red";
        } else {
            errorText.style.display = "none";
            document.getElementById("confirmPassword").style.borderColor =
                "#ddd";
            //alert("Регистрация успешна!");
        }

        const body = {
            name,
            username: phoneEmail,
            password,
        };

        fetch("http://localhost:8080/auth/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => {
                return res.text();
            })
            .then((item) => {
                alert(item);
            })
            .catch();
    });
