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
  function validateForm() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var selectedTime = document.querySelector('input[name="time"]:checked');
    var service = document.getElementById('service').value;
    var roomType = document.getElementById('room-type').value;
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var phoneNumber = document.getElementById('phone-number').value;

    if (name == '' || date == '' || !selectedTime || service == '' || roomType == '' || firstName == '' || lastName == '' || phoneNumber == '') {
        document.getElementById('error-message').innerText = 'Please fill out all fields.';
        return false;
    }

    return true;
}