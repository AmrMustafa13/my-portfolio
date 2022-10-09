// make the pre loader disappear

const preLoader = document.querySelector(".pre-loader");

window.addEventListener("load", (e) => {
  preLoader.classList.add("finished");
});

// make cursor effect

const myCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  myCursor.style.top = e.clientY + "px";
  myCursor.style.left = e.clientX + "px";
});

// go up button logic

const goUpBtn = document.querySelector(".go-up-btn");
const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > header.clientHeight) {
    goUpBtn.classList.add("show");
  } else {
    goUpBtn.classList.remove("show");
  }
});

goUpBtn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// change navbar height when scrolling

const navbar = document.querySelector(".nav-bar");

const changeNav = (e) => {
  if (window.scrollY > navbar.clientHeight) {
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
};

window.addEventListener("scroll", changeNav);

// show the nav-links pop-up on responsive

const burgerMenu = document.querySelector(".burger-menu");
const navLinksPopUp = document.querySelector(".nav-links-pop-up");
const navLinksPopUpXmark = document.querySelector(".nav-links-pop-up i");

burgerMenu.addEventListener("click", (e) => {
  navLinksPopUp.classList.add("active");
});

navLinksPopUpXmark.addEventListener("click", (e) => {
  navLinksPopUp.classList.remove("active");
});

// make the accordion work

const sideTabs = document.querySelectorAll(".side-tabs ul li");
const tabsContent = Array.from(document.querySelectorAll(".tabs-content div"));

sideTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    sideTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabsContent.forEach((tabContent) => {
      if (tabContent.getAttribute("data-tab-name") === tab.id) {
        tabContent.classList.add("active");
      } else {
        tabContent.classList.remove("active");
      }
    });
  });
});

// send email via email.js

const sendMailBtn = document.getElementById("send-email-btn");
const successMessage = document.querySelector(
  ".contact .contact-content .contact-form span"
);

sendMailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const params = {
    email_subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
  };
  emailjs.send("service_c1rsb2w", "template_ecs8o0l", params).then((res) => {
    if (res.status === 200) successMessage.classList.add("active");
  });
});

// animate elements on sroll

const animatedElements = document.querySelectorAll(".animate");

const mainObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
      mainObserver.unobserve(entry.target);
    }
  });
});

animatedElements.forEach((el) => mainObserver.observe(el));

// add and move the active class while scrolling

const mainSections = document.querySelectorAll(".main-section");
const navLinks = document.querySelectorAll(".nav-bar .nav-links li a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.2,
  }
);

mainSections.forEach((sec) => sectionObserver.observe(sec));
