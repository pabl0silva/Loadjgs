// PabloSIlva Preloader V2
/*
Autor: Pablo Silva
email: pablo.silvamg@hotmail.com
website: https://www.facebook.com/pablorsiilva
*/


var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none1'; // add "none" inside the '' to when the page loads as 100%, don't show the preloader.
});

window.addEventListener('click', function(){
  overlay.style.display = 'none';
});