document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let current = 0;
    const total = slides.length;
    const intervalTime = 30000;
    let interval = setInterval(nextSlide, intervalTime);
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
      });
      slides[index].classList.add("active");
    }
  
    function nextSlide() {
      current = (current + 1) % total;
      showSlide(current);
    }
  
    function prevSlide() {
      current = (current - 1 + total) % total;
      showSlide(current);
    }
  
    document.querySelector(".arrow_left").addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  
    document.querySelector(".arrow_right").addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });
  
    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, intervalTime);
    }
  });
  