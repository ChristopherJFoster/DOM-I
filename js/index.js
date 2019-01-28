const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: `DOM$ Is Awesome`,
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav <a>s
const navAnchorsSelector = document.querySelectorAll("a");
const navAnchorsArray = Array.from(navAnchorsSelector);
navAnchorsArray.forEach(
  (element, index) =>
    (element.textContent = siteContent.nav[`nav-item-${index + 1}`])
); // Might as well loop through if you can...

// cta
const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "DOM<br>Is<br>Awesome"; // innerHTML is a security risk, but is apparently one of the few ways to get the <br>s to stick.

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent.cta["img-src"];

// main-content
const mainContentH4s = document.querySelectorAll(".main-content h4");
const mainContentH4sArray = Array.from(mainContentH4s);
mainContentH4sArray.forEach(function(element, index) {
  switch (index) {
    case 0:
      element.textContent = siteContent["main-content"]["features-h4"];
      break;
    case 1:
      element.textContent = siteContent["main-content"]["about-h4"];
      break;
    case 2:
      element.textContent = siteContent["main-content"]["services-h4"];
      break;
    case 3:
      element.textContent = siteContent["main-content"]["product-h4"];
      break;
    case 4:
      element.textContent = siteContent["main-content"]["vision-h4"];
      break;
    default:
      console.log("Something has gone wrong...");
  }
}); // Excited to get the switch working...

const mainContentPs = document.querySelectorAll(".main-content p");
const mainContentPsArray = Array.from(mainContentPs);
console.log(mainContentPsArray);
mainContentPsArray.forEach(function(element, index) {
  switch (index) {
    case 0:
      element.textContent = siteContent["main-content"]["features-content"];
      break;
    case 1:
      element.textContent = siteContent["main-content"]["about-content"];
      break;
    case 2:
      element.textContent = siteContent["main-content"]["services-content"];
      break;
    case 3:
      element.textContent = siteContent["main-content"]["product-content"];
      break;
    case 4:
      element.textContent = siteContent["main-content"]["vision-content"];
      break;
    default:
      console.log("Something has gone wrong...");
  }
});

const mainContentImage = document.getElementById("middle-img");
mainContentImage.src = siteContent["main-content"]["middle-img-src"];

// contact

const contactH4 = (document.querySelector(".contact h4").textContent =
  siteContent.contact["contact-h4"]); // Might as well use dot chaining at least once...

const contactPs = document.querySelectorAll(".contact p");
const contactPsArray = Array.from(contactPs);
console.log(contactPsArray);
contactPsArray.forEach(function(element, index) {
  switch (index) {
    case 0:
      element.textContent = siteContent.contact.address;
      break;
    case 1:
      element.textContent = siteContent.contact.phone;
      break;
    case 2:
      element.textContent = siteContent.contact.email;
      break;
    default:
      console.log("Something has gone wrong...");
  }
});

// footer

const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;
