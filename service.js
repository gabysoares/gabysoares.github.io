function myFunction() {
// var client_id = 'abf07e6e514347eb8e09018fb199192a'
// // var popup = window.open(
// //   "https://accounts.spotify.com/authorize?client_id=abf07e6e514347eb8e09018fb199192a&response_type=code&redirect_uri=https://developer.spotify.com/documentation/general/guides/authorization-guide/&scope=playlist-modify-public%20playlist-modify-private%20user-top-read",
// //   'Login with Spotify',
// //   'width=800,height=600'
// // )

location.href = "https://accounts.spotify.com/authorize?client_id=abf07e6e514347eb8e09018fb199192a&response_type=code&redirect_uri=https://gabysoares.github.io/&scope=playlist-modify-public%20playlist-modify-private%20user-top-read";

const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

console.log(_token);

}


