/* Toggel Menu */
function classToggle() {
  var navs = document.querySelectorAll(".navbar-items");

  for (var a = 0; a < navs.length; a++) {
    navs[a].classList.toggle("navbar-toggleShow");
  }
}
document
  .querySelector(".navbar-link-toggle")
  .addEventListener("click", classToggle);

function register(form) {
  if (form.email.value === "") {
    alert("Email tidak boleh kosong!");
    form.email.focus();
    return false;
  }

  var polaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!polaEmail.test(form.email.value)) {
    alert("Silahkan masukkan email yang valid!");
    form.email.focus();
    return false;
  }

  if (form.pass.value === "") {
    alert("Password tidak boleh kosong!");
    return false;
  }

  if (form.pass.value.length < 6) {
    alert("Panjang password minimal 6 terdiri dari huruf atau angka!");
    return false;
  }

  if (form.pass.value !== form.confirPass.value) {
    alert("Password yang anda masukkan tidak sama!");
    return false;
  }

  alert("Success");

  // return true
}
