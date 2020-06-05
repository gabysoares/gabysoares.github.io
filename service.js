function myFunction() {
var client_id = 'abf07e6e514347eb8e09018fb199192a'
popup = window.open(
  "https://accounts.spotify.com/authorize?client_id=abf07e6e514347eb8e09018fb199192a&response_type=code&redirect_uri=https://developer.spotify.com/documentation/general/guides/authorization-guide/&scope=playlist-modify-public%20playlist-modify-private%20user-top-read",
  'Login with Spotify',
  'width=800,height=600'
)

window.spotifyCallback = (payload) => {
  popup.close()

  fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${payload}`
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    // do something with data
  })
}

token = window.location.hash.substr(1).split('&')[0].split("=")[1]

if (token) {
  window.opener.spotifyCallback(token)
}

}

