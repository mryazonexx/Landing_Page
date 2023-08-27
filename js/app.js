/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

// Select necessary elements
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

// Build the navigation menu
sections.forEach((section) => {
  const sectionId = section.getAttribute("id");
  const sectionName = section.getAttribute("data-nav");

  const listItem = document.createElement("li");
  listItem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;

  navList.appendChild(listItem);
});

window.addEventListener("scroll", () => {
  let activeSection = null;

  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();

    if (sectionRect.top <= 0 && sectionRect.bottom > 0) {
      activeSection = section;
    }
  });

  // Remove the "active-class" from all sections
  sections.forEach((section) => {
    section.classList.remove("active-class");
  });

  // Add the "active-class" to the active section
  if (activeSection) {
    activeSection.classList.add("active-class");
  }

  // Highlight the active menu item
  const activeLink = navList.querySelector(".active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }

  if (activeSection) {
    const currentLink = navList.querySelector(`a[href="#${activeSection.id}"]`);
    currentLink.classList.add("active");
  }
});

// Add scrolling behavior to navigation links
const navLinks = document.querySelectorAll(".menu__link");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: "smooth" });

    // Highlight the clicked menu item as active
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});
