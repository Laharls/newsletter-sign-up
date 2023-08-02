// Step 1: Get the reference to the input element
const emailInput = document.querySelector('.email-subscription');

// Step 2: Add event listener to detect input changes
emailInput.addEventListener('input', function() {
  // Step 3: Validate the input using a regular expression for email
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailValue = emailInput.value.trim();

  // Step 4: Update the CSS class based on validation
  if (emailPattern.test(emailValue)) {
   //email is valid
  } else {
    //email is invalid
  }
});