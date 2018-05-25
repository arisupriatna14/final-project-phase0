/* Toggel Menu */
function classToggle() {
  const navs = document.querySelectorAll(".navbar-items");

  navs.forEach(nav => nav.classList.toggle("navbar-toggleShow"));
}
document
  .querySelector(".navbar-link-toggle")
  .addEventListener("click", classToggle);

function register(){
  var at = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var confirPass = document.getElementById('pass-repeat').value;
  var indexOf = at.indexOf('@')

  if(indexOf === -1){
    alert('email tidak valid')
    return false
  } else {
    return true
  }

  if(pass !== confirPass){
    alert('password tidak sama')
    return false
  } else {
    return true
  }
  
}

