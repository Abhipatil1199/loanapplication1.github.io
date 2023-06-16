
function generateRandomNumber() {
    return  Math.floor(1000 + Math.random() * 9000);
    
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    var firstName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;

    // Generate a random number
    var randomNumber = generateRandomNumber();
    console.log('Random Number:', randomNumber);
  
    var confirmationMessage = "Dear " + firstName + ",\n" +
        "Thank you for your inquiry. A 4 digit verification number has been sent to your email: " + email +
        ", please enter it in the following box and submit for confirmation:";
      console.log('Confirmation Message:', confirmationMessage);
  }

   