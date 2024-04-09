const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 120);
});

// Footer Copyright
let copyright = document.querySelector(".copyright p").textContent.split(" ");
copyright[1] = new Date().getFullYear();
document.querySelector(".copyright p").textContent = copyright.join(" ");

/* media queries */
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// Scroll to top button
const scrollTopBtn = document.querySelector(".scrolltotop-btn");
window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navlist a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navlist a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

// sent Email form emailjs
document.querySelector("#contact").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form values
  const formData = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  const msgSent = document.querySelector(".contact-message");

  // // Send the email using emailJS
  emailjs
    .send("service_83azok7", "template_9tulb3t", formData, "bgd-zpH2qZHAybBu_")
    .then(
      function (response) {
        // console.log('Email sent!', response.status, response.text);
        Swal.fire({
          title: "Success",
          text: "Message send succesfully!",
          icon: "success",
        });
        document.getElementById("fullname").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        // console.log("Error sending email:", error);
        Swal.fire({
          title: "Error",
          text: "Will fix error soon.!",
          icon: "error",
        });
      }
    );
});
// Website light/Dark theme
const themebtn = document.querySelector(".theme-btn");

themebtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themebtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});
const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";
const getCurrentIcon = () => themebtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon= localStorage.getItem("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
  themebtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
  
}