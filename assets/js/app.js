var body = document.body;

var centerFirst = document.createElement("center");
body.appendChild(centerFirst);

var img = document.createElement("img");
img.setAttribute(
  "src",
  "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1482132470/vfmmn0twb17nn2epblee.png"
);
centerFirst.appendChild(img);

var center = document.createElement("center");
body.appendChild(center);

var h1 = document.createElement("h1");
var text = document.createTextNode("Welcome to My Awesome Project Phase 0");
h1.appendChild(text);
center.appendChild(h1);

var br1 = document.createElement("br");
body.appendChild(br1);

var br2 = document.createElement("br");
body.appendChild(br2);

var myCenter = document.createElement("center");
body.appendChild(myCenter);

var anchor1 = document.createElement("a");
var text = document.createTextNode("Login");
anchor1.appendChild(text);
anchor1.setAttribute("href", "login.html");
anchor1.className = "button";
center.appendChild(anchor1);

var anchor2 = document.createElement("a");
var text = document.createTextNode("Signup");
anchor2.appendChild(text);
anchor2.setAttribute("href", "signup.html");
anchor2.className = "button";
center.appendChild(anchor2);
