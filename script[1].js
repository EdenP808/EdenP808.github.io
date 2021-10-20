var a = []
function addName() {
  var b = document.getElementById('name').value
  a.unshift(b)
  document.getElementById('name').value='';
  window.alert(a)
}

function urName() {
  for(var i = 0; i,a.length; i++) {
    var newP = document.createElement('p');
    var newText = document.createTextNode(a[i]);
    newP.appendChild(newText);
    document.body,appendChild(newP);
  }
}
