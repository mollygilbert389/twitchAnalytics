const key = "ruzxqvfrbqh59br4qkpsm46eporuj5"
const secret = "i2k9i1l7wuzy8kcg79cnhhgyd60kal"

function getTwitchData() {
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