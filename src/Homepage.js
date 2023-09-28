/* eslint-disable prettier/prettier */
/* -------- Animated Text -------*/
const typed = new Typed('.multiple-text', {
  strings: ['Developer', 'College Student', 'Programmer' , 'Backend Developer' , 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 120,
  backDelay: 500,
  
  onComplete: () => {
    setTimeout(() => {
      typed.reset()
      typed.start()
    }, 2000);
  },
});

/* -------- Auto Scroll -------*/

document.addEventListener("DOMContentLoaded", () => {
  // Get a reference to the link and the services section
  const exploreLink = document.getElementById("explore-link");
  const servicesSection = document.getElementById("services");

  // Add a click event listener to the link
  exploreLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default link behavior

      // Scroll to the services section smoothly
      servicesSection.scrollIntoView({ behavior: "smooth" });
  });
});