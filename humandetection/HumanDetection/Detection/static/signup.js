const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");



form.addEventListener('submit',function(e){
    e.preventDefault();
    checkinput();
});

function checkinput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue == ''){
        document.getElementById("small").innerHTML="User Name Cannot Be Blank";
        document.getElementById("username").style.borderColor="red";
    }
    else{
        document.getElementById("small").innerHTML="";
        document.getElementById("username").style.borderColor="green";
    }
    
    
    if(emailValue == ''){
        document.getElementById("small1").innerHTML="Email Cannot Be Blank";
        document.getElementById("email").style.borderColor="red";  
    }
    else{
        document.getElementById("small1").innerHTML="";
        document.getElementById("email").style.borderColor="green";
    }
    
    if(!ValidEmail(emailValue) && emailValue != ''){
        document.getElementById("small1").innerHTML="Enter Valid Email";
    }
    if(passwordValue == ''){
        document.getElementById("small2").innerHTML="Password Cannot Be Blank";
        document.getElementById("password").style.borderColor="red";
        
    }
    else{
        document.getElementById("small2").innerHTML="";
        document.getElementById("password").style.borderColor="green"
    }
    
    if(password2Value == ''){
        document.getElementById("small3").innerHTML="Password Cannot Be Blank";
        document.getElementById("password2").style.borderColor="red";
        
    }
    else if(password2Value != passwordValue){
        document.getElementById("small3").innerHTML="Password Doesn't Match";
        
        
    
    }
    else{
        document.getElementById("small3").innerHTML="";
        document.getElementById("password2").style.borderColor="green";
    }
    
  
   
}
function ValidEmail(email)
{
   const Validemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   return Validemail;
}

function psw(){
    document.getElementById("small4").innerHTML="<br>Password Must Contain<br>1.Atleast One Capital Letter<br>2.Atleast One Special Charecter<br>3.Atleast One Number";
    document.getElementById("small4").style.color="black";
    document.getElementById("small4").style.fontSize="15px";
    document.getElementById("small4").style.fontWeight="bold"
}
function psw1(){
    document.getElementById("small2").innerHTML="";
}
function hidd(){
    document.getElementById("small4").innerHTML="";
}







