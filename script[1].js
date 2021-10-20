var a = []
function urName() {
  var b = document.getElementById('name').value
  a.unshift(b)
  document.getElementById('name').value='';
  window.alert(a)
}
