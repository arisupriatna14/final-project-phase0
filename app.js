// var body = document.body; //pertama seleksi terlebih dahulu <body>
// var mainDiv = document.createElement('div');
// var mainDivAttrId = document.createAttribute('id');
// mainDivAttrId.value = 'main';
// mainDiv.setAttributeNode(mainDivAttrId)
// body.appendChild(mainDiv);

// //membuat div didalam div dengan id = "main"
// var insideMainDiv = document.createElement('div')
// insideMainDiv.setAttribute('id', 'insidemain')
// mainDiv.appendChild(insideMainDiv)

// var h1 = document.createElement('h1')//membuat element h1
// var h1Text = document.createTextNode('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ')//membuat isi text
// h1.appendChild(h1Text) //melakukan appendChild ke element <h1>
// insideMainDiv.appendChild(h1)//kemudian, kita append h1 sebagai child dari <div id="inside-main">

// //membuat button
// var button = document.createElement('button')
// var buttonText = document.createTextNode('Click Me!')
// button.appendChild(buttonText)
// //membuat alert ketika button di klik
// button.addEventListener('click', function(){
//   alert('Hello, Ari Supriatna');
// })
// insideMainDiv.appendChild(button)

// var h2 = document.createElement('h2')
// var h2Text = document.createTextNode('Ini adalah heading 2')
// h2.appendChild(h2Text)
// body.appendChild(h2)

// //untuk menghapus element
// body.removeChild(h2)

//================================
var body = document.body

//membuat element div
var div = document.createElement('div')
div.setAttribute('id', 'myDIV')
div.className = 'header'
body.appendChild(div)

//membuat element h2
var h2 = document.createElement('h2')
var textH2 = document.createTextNode('My To Do Apps')
h2.appendChild(textH2)
div.appendChild(h2) //melakukan append h2 sebagai child dari <div id="myDIV">

//membuat element input
var input = document.createElement('input')
input.setAttribute('id', 'myInput')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Title...')
div.appendChild(input)

var span = document.createElement('span')
var spanText = document.createTextNode('Add')
span.className = 'addBtn'
span.onclick = function(){
  newElement();
} 
span.appendChild(spanText)
div.appendChild(span)

/* membuat list */
//membuat element ul
var ul = document.createElement('ul')
ul.setAttribute('id', 'myUL')
body.appendChild(ul)

//membuat element li
var li = document.createElement('li')
var textList1 = document.createTextNode('Ngoding')
li.appendChild(textList1)
ul.appendChild(li)

var li2 = document.createElement('li')
var textList2 = document.createTextNode('Live Code')
li2.appendChild(textList2)
ul.appendChild(li2)



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
  span.className = "close"
  span.appendChild(spanText);
  li.appendChild(span);

  for (var c = 0; c < close.length; c++) {
    close[c].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}


/* Toggel Menu */
function classToggle() {
  const navs = document.querySelectorAll('.navbar-items')

  navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
}
document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);