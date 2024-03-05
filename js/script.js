document.getElementById("input-form").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var birthdateInput = document.getElementById("birthdate");
    var addressInput = document.getElementById("address");
    var errorMessage = document.getElementById("error-message");
  
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || birthdateInput.value.trim() === "" || addressInput.value.trim() === "") {
      errorMessage.innerText = "All fields are required.";
      event.preventDefault();
    } else {
      errorMessage.innerText = "";
    }
  });
  