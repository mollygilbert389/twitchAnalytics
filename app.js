const key = "ruzxqvfrbqh59br4qkpsm46eporuj5"

function getTwitchData() {
    console.log(Date.now())
    fetch('https://id.twitch.tv/oauth2/validate', {
	headers: {
        "Authorization": "Bearer " + key,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.twitchtv.v5+json'
	}
	}).then(function (response) {
        console.log(response)
		return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })
};

getTwitchData();