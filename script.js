
    // Initialize EmailJS
    (function(submit) {
      emailjs.init("oSuMyTLMtzc10QOjy"); // Replace with your EmailJS user ID
    })();

    // Form submit handler
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission

      // Get form data
      const formData = {
        name: document.getElementById('email').value,
        email: document.getElementById('phone').value,
        message: document.getElementById('message').value
      };

      // Send email via EmailJS
      emailjs.send("oSuMyTLMtzc10QOjy", "sfDPo8UbtMdanA8CPRpHY", formData)
        .then(function(response) {
          alert("Your message has been sent successfully!");
          // Optionally reset the form after submission
          document.getElementById('contact-form').reset();
        }, function(error) {
          alert("Failed to send message. Please try again.");
        });
    });