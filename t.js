let param = (new URL(document.location)).searchParams;
var wh = param.get("wh");
var msg = param.get("data");
var request = new XMLHttpRequest();
request.open("POST", wh);
request.setRequestHeader('Content-type', 'application/json');
var params = {
    username: "Hello World",
    avatar_url: "https://miro.medium.com/max/500/1*DhlEHM0sZs1DKEoBc40ldQ.png",
    content: msg,
};
request.send(JSON.stringify(params));