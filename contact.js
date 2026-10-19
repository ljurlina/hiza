const form = document.getElementById("contact-form");

if (form) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const roomSelect = document.getElementById("room");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const roomError = document.getElementById("room-error");
  const messageError = document.getElementById("message-error");
  const successMessage = document.getElementById("form-success");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const clearErrors = () => {
    nameError.textContent = "";
    emailError.textContent = "";
    roomError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
  };
  
  const validate = () => {
    clearErrors();
    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = "Please enter your email.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!roomSelect.value) {
      roomError.textContent = "Please choose a room.";
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = "Please add a short message.";
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message should be at least 10 characters.";
      isValid = false;
    }

    return isValid;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validate()) {
      successMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    }
  });
}
