// FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  });
});

// Contact Form

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Simulate form submission (replace with your actual submission logic)
  console.log("Form submitted!");

  // Show confirmation modal
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );
  confirmationModal.show();
});
