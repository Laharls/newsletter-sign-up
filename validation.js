// Step 1: Get the reference to the input element
const emailInput = document.querySelector('.email-subscription');
const buttonSubscription = document.querySelector('#subscribe');
const buttonDismiss = document.querySelector('#dismiss');
const newsletter = document.querySelector('.newsletter');
const thanks_subscription = document.querySelector('.hidden');


buttonSubscription.addEventListener('click', function() {
  //Validate the input using a regular expression for email
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailValue = emailInput.value.trim();

  if (emailPattern.test(emailValue)) {
   newsletter.classList.add('hidden');
   newsletter.classList.remove('newsletter');
   thanks_subscription.classList.remove('hidden');
   thanks_subscription.classList.add('thanks__subscription');
  } else {
    alert("Email is invalid, please enter a valid email")
  }
});

buttonDismiss.addEventListener('click', function() {
   newsletter.classList.remove('hidden');
   newsletter.classList.add('newsletter');
   thanks_subscription.classList.add('hidden');
   thanks_subscription.classList.remove('thanks__subscription');
})