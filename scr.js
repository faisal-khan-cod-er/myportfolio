document.querySelectorAll(".certificate-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
