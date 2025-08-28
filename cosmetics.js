const button = document.querySelector(".button");
const downloadIcon = document.querySelector(".download-icon");
const tickIcon = document.querySelector(".tick-icon");

button.addEventListener("click", () => {
  // Hide download icon
  downloadIcon.style.display = "none";

  // Show tick icon with animation
  tickIcon.style.display = "inline-block";

  // Optional: revert back after a few seconds
  setTimeout(() => {
    tickIcon.style.display = "none";
    downloadIcon.style.display = "inline-block";
  }, 2000);
});

const zipHover = document.querySelector(".cc__ziphover");
const downloadContainer = document.querySelector(".downloadcontainer");

zipHover.addEventListener('mouseenter', () => {
  downloadContainer.classList.add('identify');
  downloadContainer.classList.remove('removeIdentify');
});

zipHover.addEventListener('mouseleave', () => {
  downloadContainer.classList.remove('identify');
  downloadContainer.classList.add('removeIdentify');
});

