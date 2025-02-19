document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const statsSection = document.querySelector(".stats");
  const offerSection = document.querySelector(".offer-container");
  const tutorsSection = document.querySelector(".tutors");
  const artSection = document.querySelector(".art");
  const musicSection = document.querySelector(".music");
  const rentSection = document.querySelector(".rent");
  const priceSection = document.querySelector(".price");
  const certificateSection = document.querySelector(".certificate");
  const contactsSection = document.querySelector(".contacts");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, // Когда 30% элемента будет видно
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Появление секции hero
        if (entry.target === heroSection) {
          heroSection.classList.add("hero-visible");
        }
        // Появление секции stats
        // if (entry.target === statsSection) {
        //   statsSection.classList.add("stats-visible");
        // }
        // Появление секции offer
        if (entry.target === offerSection) {
          offerSection.classList.add("offer-container-visible");
        }
        // Появление секции tutors
        if (entry.target === tutorsSection) {
          tutorsSection.classList.add("tutors-visible");
        }
        // Появление секции art
        if (entry.target === artSection) {
          artSection.classList.add("art-visible");
        }

        // Появление секции music
        if (entry.target === musicSection) {
          musicSection.classList.add("music-visible");
        }

        // Появление секции rent
        if (entry.target === rentSection) {
          rentSection.classList.add("rent-visible");
        }

        // Появление секции price
        if (entry.target === priceSection) {
          priceSection.classList.add("price-visible");
        }
      }
      // Появление секции certificate
      if (entry.target === certificateSection) {
        certificateSection.classList.add("certificate-visible");
      }
      // Появление секции contacts
      if (entry.target === contactsSection) {
        contactsSection.classList.add("contacts-visible");
      }
    });
  }, observerOptions);

  // Отслеживаем все секции
  observer.observe(heroSection);
  // observer.observe(statsSection);
  observer.observe(offerSection);
  observer.observe(tutorsSection);
  observer.observe(artSection);
  observer.observe(musicSection);
  observer.observe(rentSection);
  observer.observe(priceSection);
  observer.observe(certificateSection);
  observer.observe(contactsSection);
});
