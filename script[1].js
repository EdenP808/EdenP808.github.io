//create function saveName
function saveName () {
  //save input as fieldValue
  var fieldValue = document.getElementById('textfield').value;
  //store the input
  localStorage.setItem('username',fieldValue);
  //move person to different page
  window.location.href = "page2.html";
}
