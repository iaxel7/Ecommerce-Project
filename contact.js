// Function to validate the form when submitted
function validateForm() {
    // Get the values of name, email, and message fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Regular expression to check if the email format is valid
    var emailRegex = /\S+@\S+\.\S+/;
    
    // Check if any of the fields are empty. .trim() removes whitespace
    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
      // If any field is empty, show an alert message and prevent form submission
      alert("Please fill out all fields");
      return false;
    }
    
    // Check if the entered email is in a valid format using regex
    if (!emailRegex.test(email)) {
      // If email format is not valid, show an alert message and prevent form submission
      alert("Please enter a valid email address");
      return false;
    }
    
    // If form validation passes, reset the form and show a success message
    document.getElementById("contactForm").reset();
    document.getElementById("successMessage").style.display = "block";
    // Hide the success message after 3 seconds
    setTimeout(function(){
      document.getElementById("successMessage").style.display = "none";
    }, 3000);
    
    // Prevent default form submission
    return false;
  }