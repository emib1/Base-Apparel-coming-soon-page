const arrowBtn = document.querySelector('.submit');
const errorImg = document.querySelector('.error');
const errorMessage = document.querySelector('.error-message');
const inputEmail = document.getElementById("email") ;
const form = document.querySelector('.input');


arrowBtn.addEventListener("click", function(e){
    e.preventDefault();
 
    if (inputEmail.value.includes(".com") && inputEmail.value.includes("@")){
      errorMessage.classList.add("hide");
      errorImg.classList.add("hide");

    }

    else{
        errorMessage.classList.remove("hide");
        errorImg.classList.remove("hide");
    }

})