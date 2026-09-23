/* =========================================================
   AQUASCAPE GET QUOTE JAVASCRIPT
========================================================= */

const body = document.body;
const html = document.documentElement;

const themeToggle =
    document.getElementById("themeToggle");

const rtlToggle =
    document.getElementById("rtlToggle");

const rtlText =
    document.getElementById("rtlText");

const quoteForm =
    document.getElementById("quoteForm");

const formMessage =
    document.getElementById("formMessage");


/* =========================================================
   DARK / LIGHT THEME
========================================================= */

themeToggle.addEventListener("click", function () {

    const darkMode =
        body.classList.toggle("dark-theme");


    if (darkMode) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        themeToggle.title =
            "Light Mode";

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        themeToggle.title =
            "Dark Mode";
    }

});


/* =========================================================
   RTL / LTR
========================================================= */

rtlToggle.addEventListener("click", function () {

    const isRTL =
        html.getAttribute("dir") === "rtl";


    if (isRTL) {

        html.setAttribute("dir", "ltr");

        rtlText.textContent = "RTL";

        rtlToggle.title = "RTL";

    } else {

        html.setAttribute("dir", "rtl");

        rtlText.textContent = "LTR";

        rtlToggle.title = "LTR";
    }

});


/* =========================================================
   FORM SUBMISSION
========================================================= */

quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();


    if (!quoteForm.checkValidity()) {

        formMessage.textContent =
            "Please fill in all required fields.";

        formMessage.className =
            "form-message error";

        quoteForm.reportValidity();

        return;
    }


    const name =
        document.getElementById("fullName")
        .value
        .trim();


    const service =
        document.getElementById("service")
        .value;


    formMessage.textContent =
        `Thank you, ${name}! Your request for ${service} has been received. We will contact you shortly.`;


    formMessage.className =
        "form-message success";


    quoteForm.reset();

});