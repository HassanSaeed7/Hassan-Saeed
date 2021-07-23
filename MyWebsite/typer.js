let text = "I am Hassan Saeed.";
let i = 0;
setInterval(function() {
    let cursor = (i%4==0 || i%3==0 ? "_" : "&nbsp;")
    let displayText = text.substring(0, i % text.length);
    document.getElementById("typespace").innerHTML = displayText;
    i++;
}, 500);