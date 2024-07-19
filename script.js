document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById("registration-form");

    //submission amd prevention
    form.addEventListener('submit', function(event){
            event.preventDefault();
        })
        
        let isValid = true;

        let messages = [];
        console.log(messages);

        const feedbackDiv = document.getElementById("form-feedback");
        feedbackDiv.style.display = "block";

        const userName = document.getElementById("username").value.trim();
        if (userName.length < 3){
            isValid = false;
            messages.push("username must be atleast three characters long");

        }

        const email = document.getElementById("email").value.trim();
        if(email.indexOf('@') === -1 || email.indexOf('.') === -1){ //to check if @ and '.' is part of the email
            isValid = false;
            messages.push("sorry the email must contain both '@' and '.'");
        }

        const password = document.getElementById("password").value.trim();
        if(password.length < 8){
            isValid = false;
            messages.push("password must be atleast 8 characters long");

        }
        if(isValid === true){
            feedbackDiv.textContent = "Registration successful!";
        }else if(isValid === false){
            let erroMessages = messages.join("<br>");
            feedbackDiv.innerHTML = erroMessages;
            feedbackDiv.style.color = "#dc3545";
        }

})
