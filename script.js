function myFunction(){

if (_token){

  $.ajax({
   url: "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50",
   type: "GET",
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
   success: function(data) { 
     // Do something with the returned data
     data.items.map(function(track) {
       let item = $('<li>' + track.name + ' - ' +track.artists[0] + '</li>');
       item.appendTo($('#top-tracks'));
     });
   }
});

}

console.log("test");

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}

console.log("here");
getTracks(_token);

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
       let item = $('<li>' + track.name + ' - ' +track.artists[0] + '</li>');
       let item = $('<li>' + track.name + '</li>');
       item.appendTo($('#top-tracks'));
     });
   }
});
} 

// Make a call using the token
console.log(_token);
 