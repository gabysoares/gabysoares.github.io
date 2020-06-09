// Get the hash of the ur

function myFunction(){


console.log("test");

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

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'abf07e6e514347eb8e09018fb199192a';
const redirectUri = 'https://gabysoares.github.io/';
const scopes = [
  'user-top-read',
  'playlist-modify-public', 
  'playlist-modify-private'
];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
  getTracks(_token);
} 


}
// Make a call using the token

function getTracks(_token){
$.ajax({
   url: "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50",
   type: "GET",
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
   success: function(data) { 
     // Do something with the returned data
     data.items.map(function(track) {
       let item = $('<li>' + track.name + '</li>');
       item.appendTo($('#top-tracks'));
     });
   }
});

console.log(_token);

}