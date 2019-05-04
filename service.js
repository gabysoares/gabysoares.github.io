// var password = "test";

// (function password() {
// 	var psw = prompt("Enter your Password");
// 	while (psw != password) {
//     alert("Incorrect Password");
//     return password();
// 	}
// }());

// alert('Enter')


function myFunction() {
	var password = "test";
  userpwd = prompt("enter pwd");
  if (userpwd !== password) {
  	alert("Repent")
  	window.location.href = "info.html";
  } else {
  	alert("welcome")
  }
}