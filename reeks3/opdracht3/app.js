let nameV = document.getElementById('name')

function message(){
  window.addEventListener("keydown", showMessage);
  window.addEventListener("keyup", showMessage);
}

function showMessage(){
  alert(nameV.value);
  window.removeEventListener("keydown", showMessage);
  window.removeEventListener("keyup", showMessage);
}
