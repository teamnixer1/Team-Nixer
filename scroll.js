const containers = document.querySelectorAll('.h__container');
const bcontainers = document.querySelectorAll(".content .nixerinfo");
const ccontainers = document.querySelectorAll(".coachrequirementsinfo, #coachinformation > table");

ccontainers.forEach(container => {
    console.log("child element:", container);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

containers.forEach(container => observer.observe(container));
bcontainers.forEach(container => observer.observe(container));
ccontainers.forEach(container => observer.observe(container));
