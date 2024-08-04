window.RevealLoud = function () {
  return {
    id: "RevealLoud",
    init: function (deck) {
      Reveal.on('ready', (event) => {
        slides = document.querySelectorAll("section.slide");

        slides.forEach(
          (slide) => {
            slide.classList.add("center");
            slide.querySelectorAll("*").forEach((child) => child.classList.add("r-fit-text"))
          }
        );
      });
    },
  };
};

