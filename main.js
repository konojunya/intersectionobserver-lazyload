window.addEventListener("load", () => {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio != 0) {
        entry.target.src = entry.target.dataset.src;
        this.unobserve(entry.target);
      }
    })
  }, {
    threshold: [0]
  });

  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    observer.observe(img)
  });
})