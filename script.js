function ValidateEmail(inputText)
{
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* /^[^\s@]+@[^\s@]+\.[^\s@]+$/ */
if(inputText.value.match(mailformat))
{
  document.querySelector(".valid-email").style.display = "block";       
  document.querySelector(".invalid-email").style.display = "none";
  inputText.style.border = "2px solid var(--desaturated-red)"; 
  inputText.style.backgroundImage = "none";
  document.form1.email.focus();
  return true;
}

else

{
  
    document.querySelector(".invalid-email").style.display = "block";
    document.querySelector(".valid-email").style.display = "none";
    inputText.style.backgroundImage = "url('./images/icon-error.svg')";
    inputText.style.border = "2px solid var(--soft-red)"; 
    inputText.style.backgroundPosition = "75%";
    inputText.style.backgroundRepeat = "no-repeat";

  }
    document.form1.email.focus();
    return false;
}

