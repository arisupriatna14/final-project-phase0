var body = document.body;

//membuat element div
var div = document.createElement("div");
div.setAttribute("id", "myDIV");
div.className = "header";
body.appendChild(div);

//membuat element h2
var h2 = document.createElement("h2");
var textH2 = document.createTextNode("My To Do Apps");
h2.appendChild(textH2);
div.appendChild(h2); //melakukan append h2 sebagai child dari <div id="myDIV">

var h3 = document.createElement('h3')
h3.setAttribute('id', 'date')
div.appendChild(h3)

//membuat element input
var input = document.createElement("input");
input.setAttribute("id", "myInput");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add a to-do");
div.appendChild(input);

var span = document.createElement("span");
var spanText = document.createTextNode("Add");
span.className = "addBtn";
span.onclick = function() {
  newElement();
};
span.appendChild(spanText);
div.appendChild(span);

/* membuat list */
//membuat element ul
var ul = document.createElement("ul");
ul.setAttribute("id", "myUL");
body.appendChild(ul);

//membuat element li
var li = document.createElement("li");
var textList1 = document.createTextNode("Ngoding");
li.appendChild(textList1);
ul.appendChild(li);

var li2 = document.createElement("li");
var textList2 = document.createTextNode("Live Code");
li2.appendChild(textList2);
ul.appendChild(li2);

var li3 = document.createElement("li");
var textList3 = document.createTextNode("Final live code phase 0");
li3.appendChild(textList3);
ul.appendChild(li3);

/* DATE */
var myMonth = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];
//var myDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
// var thisDay = date.getDay(),
//   thisDay = myDay[thisDay];
var yy = date.getFullYear();
var year = yy < 1000 ? yy + 1999 : yy;
document.getElementById("date").innerHTML = `${day} ${
  myMonth[month]
} ${year}`;

//membuat button close
var myNodeList = document.getElementsByTagName("LI");
for (var a = 0; a < myNodeList.length; a++) {
  var span = document.createElement("SPAN");
  var spanText = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(spanText);
  myNodeList[a].appendChild(span);
}
//click button close to hide the current list item
var close = document.getElementsByClassName("close");
for (var b = 0; b < close.length; b++) {
  close[b].onclick = function() {
    var div = this.parentElement; //harus dicari pengertiannya
    div.style.display = "none";
  };
}

//Add a "checked" symbl when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//create new list item when clicking on the 'Add' button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === "") {
    alert("Tuliskan sesuatu. Tidak boleh kosong!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var spanText = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(spanText);
  li.appendChild(span);

  for (var c = 0; c < close.length; c++) {
    close[c].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

/*change theme */

var navbar = document.querySelector(".navbar");
var addBtn = document.querySelector('.addBtn')
var zeros = "0000000";

function changeColor(e) {
  var color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  var colorLength = color.length;

  if (colorLength < 7) {
    color += zeros.substring(0, zeros.length - colorLength);
  }

  navbar.style.backgroundColor = color;
  addBtn.style.backgroundColor = color;
}

/* Toggel Menu */
function classToggle() {
  const navs = document.querySelectorAll(".navbar-items");

  navs.forEach(nav => nav.classList.toggle("navbar-toggleShow"));
}
document
  .querySelector(".navbar-link-toggle")
  .addEventListener("click", classToggle);