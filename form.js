let password=document.querySelector('input[name="password"]');

let confirmed=document.querySelector('input[name="passwordConfirm"]')

const button=document.querySelector("button");

let errorMessage=document.getElementById("errorMessage");

button.addEventListener("click",()=>{
    if(password.value=="" && confirmed.value==""){
        button.type="reset";
    }
    else if(password.value !== confirmed.value){
            errorMessage.innerHTML="*Passwords do not match";
            
            password.style.border="1px solid red";
            confirmed.style.border="1px solid red";
            
    }
    else{
        button.type="submit"
    }
})