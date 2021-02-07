const clientId = "ruzxqvfrbqh59br4qkpsm46eporuj5"
const secret = "i2k9i1l7wuzy8kcg79cnhhgyd60kal"


function getTwitchData() {
    fetch('https://id.twitch.tv/oauth2/authorize?client_id=ruzxqvfrbqh59br4qkpsm46eporuj5&redirect_uri=https://127.0.0.1:5500/index.html&response_type=token%20id_token', {
    method: "POST",
	}).then(function (response) {
        console.log(response)
		return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    .then(function (data) {
		console.log('token', data);
		return fetch('https://api.twitch.tv/helix/channels/editors', {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.twitchtv.v5+json',
            
		}
	});
	}).then(function (jsonData) {
		console.log(jsonData)
		return jsonData.json();

	}).then(function (twitchData) {
		console.log(twitchData);
    })
    .catch(function(error){
        console.log(error)
    })
};

getTwitchData();