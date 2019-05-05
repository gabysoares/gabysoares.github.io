function myFunction() {
	var password = "test123";
	var finalpassword = password.toLowerCase();
  userpwd = prompt("password ('test123 for now')");
  if (userpwd !== finalpassword) {
  	alert("no")
  	window.location.href = "index.html";
  } if (userpwd == finalpassword) {
  	alert("welcome")
  	window.location.href = "info.html";
  }
}