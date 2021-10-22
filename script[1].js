var a;

function getName() {
    //get value from input field and save as "a"
    a = document.getElementById('username').value;
    //create local storage key with value of "a"
    localStorage.setItem('uName',a);
    //automatically take user to page two.html
    location.href = "two.html";
}

function urName() {
  for(var i = 0; i,a.length; i++) {
    var newP = document.createElement('p');
    var newText = document.createTextNode(a[i]);
    newP.appendChild(newText);
    document.body,appendChild(newP);
  }
}
