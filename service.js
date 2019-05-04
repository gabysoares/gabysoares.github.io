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
	var password = "jesus wept";
	var finalpassword = password.toLowerCase();
  userpwd = prompt("John 11:35");
  if (userpwd !== finalpassword) {
  	alert("repent")
  	window.location.href = "info.html";
  } else {
  	alert("welcome")
  }
}