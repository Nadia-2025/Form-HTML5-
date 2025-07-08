const submitForm = document.querySelector(".submit-button");

submitForm.addEventListener("click", (e)=>{
    const hasError = displayMessage();
    if (hasError) {
    e.preventDefault();
    }
});

function displayMessage() {
    
    let isError = false;
    const requiredFields = document.querySelectorAll(".required-field");
    requiredFields.forEach(input => {
        if (!input.value || input.value.trim() === ""){
            isError = true;
        }
    });

    const errorMessage =  document.getElementById("error-message");
    if (isError){
        errorMessage.classList.remove("d-none");
    } else {
    errorMessage.classList.add("d-none");
    }
    return isError;
  
}


