// When the user scrolls the page, execute myFunction

if (
  window.location.pathname == "/" ||
  window.location.pathname.includes("winners") ||
  window.location.pathname.includes("events") ||
  window.location.pathname.includes("register")
) {
  window.onscroll = function () {
    myFunction("main");
  };
} else {
  let uicont = document.querySelector("body");

  uicont.addEventListener("scroll", function () {
    myFunction("notmain");
  });
}
// Get the navbar
var navbar = document.querySelector(".navbar.navbar-expand-lg");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(status) {
  if (status == "main") {
    // console.log(window.pageYOffset)
    let bodydiv = document.querySelector("body");

    // console.log('bruh',bodydiv.getBoundingClientRect().top)
    if (window.pageYOffset != 0) {
      if (!navbar.classList.add("sticky")) {
        //  console.log("comeon")

        navbar.classList.add("sticky");
        navbar.style.position = "fixed";
        navbar.style.boxSizing = "border-box";
      }
    } else {
      navbar.classList.remove("sticky");
      navbar.style.position = null;
      navbar.style.boxSizing = null;
    }
  }
  if (status == "notmain") {
    try {
      let bodydiv = document.querySelector("body");

      if (bodydiv.getBoundingClientRect().top == 0) {
        navbar.classList.remove("sticky");
        navbar.style.position = null;
        navbar.style.boxSizing = null;
        navbar.style.width = "100%";
      }
      if (navbar.getBoundingClientRect().top != 0) {
        if (!navbar.classList.add("sticky")) {
          navbar.classList.add("sticky");
          navbar.style.position = "fixed";
          navbar.style.boxSizing = "border-box";
          navbar.style.width = "98.8%";
        }
      } else {
      }
    } catch (e) {}
  }
}
