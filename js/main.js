/* function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

jsonp('https://api.deezer.com/version/service/id/method/?parameters', function(data) {
    alert(data);
}); */



/* function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/version/service/id/method/?parameters", true);
    xhttp.send();
} 


DZ.init({
    appId  : 275242,
    channelUrl : 'http://127.0.0.1:8080/'
});
DZ.login(function(response) {
    if (response.authResponse) {
        console.log('Welcome! Fetching your information.... ');
        DZ.api('/user/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
        });
    } else {
        console.log('User cancelled login or did not fully authorize.');
    }
}, {perms: 'basic_access,email'});*/