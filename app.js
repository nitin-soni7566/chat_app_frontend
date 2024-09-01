const form = document.querySelector("form");
let data = {};

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission to avoid page reload

    const formData = new FormData(form);

    // Correct the for...of loop and how data is accessed
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    if (data["password"] === data["password2"]) {
        console.log("yes")
    }
    else {

        let pass2 = document.querySelector("#pass2")

        pass2.style.color = "red"
        window.alert("Comfirm password did'nt match")


    }
    delete data["password2"]
    console.log(data)
});
