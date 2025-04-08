document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const email = this.email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!regex.test(email)) {
      showMessage("❌ Please enter a valid email address.", "error");
      return;
    }

    // Show success message
    showMessage("✅ Thank you! Your message has been sent.", "success");

    // Reset form
    this.reset();
  });

  // Show temporary message box
  function showMessage(text, type) {
    const msgBox = document.createElement("div");
    msgBox.textContent = text;
    msgBox.className = `form-message ${type}`;
    document.body.appendChild(msgBox);

    // Animate in
    setTimeout(() => {
      msgBox.classList.add("show");
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      msgBox.remove();
    }, 3000);
  }

  // Scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll(".contact-container, .map-container").forEach((el) => {
    observer.observe(el);
  });
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstname = this.firstname.value.trim();
  const lastname = this.lastname.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  console.log("Submitted Data:");
  console.log("First Name:", firstname);
  console.log("Last Name:", lastname);
  console.log("Email:", email);
  console.log("Message:", message);

  // Your existing validation and success message
});
