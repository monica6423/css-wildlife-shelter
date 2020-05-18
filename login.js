
/*********LOG IN POPUP*************/ 
var log = document.getElementById("spanLogin");
var lightBox = document.getElementById("lightBox");
var id = document.getElementById("memId");
var pw = document.getElementById("memPsw"); 
var memName = document.getElementById("memName");
var spanLogin = document.getElementById("spanLogin");
var btnLogin = document.getElementById("btnLogin");

function showLoginForm(){
 if(log.innerHTML=="Log in/ Register"){
   lightBox.style.display = "block";
 }
 else{
   log.innerHTML="Log in/ Register";
   lightBox.style.display = "none";
     }
}

function sendForm(){
if(id.value == "Sara" && pw.value == "111"){
  memName.textContent = "Sara";
  log.textContent = "Log out"; 
  lightBox.style.display = "none";
}
else{
 window.alert("帳密錯誤");
}
}

function cancelLogin(){
 lightBox.style.display = "none";
}

function init(){
 
}; 