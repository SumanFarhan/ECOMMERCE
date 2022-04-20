function login () {
    let email, psw;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;

    let user_records = [];
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
            return v.email == email && v.psw})) {
        alert("logged in");
        window.location.href="home.html"

    } else {
        alert("Incorect email or password!!")
    }

}