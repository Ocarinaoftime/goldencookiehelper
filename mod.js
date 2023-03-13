function once(fn, context) { 
    var result;
    return function() { 
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}

function changeText() {
    h.innerHTML = `${document.getElementById("shimmers").childElementCount} golden/wrath cookie(s) is on screen!`;
    document.title = `${document.getElementById("shimmers").childElementCount} golden/wrath cookie(s) is on screen!`;
    once(Game.Notify('thing', 'stuff', [27, 6]))
}

window.requestAnimationFrame(loop)
function loop() {
    if (document.getElementById("shimmers").hasChildNodes()) {
        changeText()
    } else {
        h.innerHTML = "No golden/wrath cookies on screen.";
    }
    window.requestAnimationFrame(loop);
}
var h = document.createElement("div");
h.style.position = "relative";
h.className = 'inset title';
h.id = 'text'
h.style.fontSize = '17px';
h.innerHTML = "No golden/wrath cookies on screen.";
h.style.left = "-51px";
h.style.top = '55px';
document.getElementById('comments').append(h);
document.addEventListener("keypress", (event) => {
    if (event.key == " ") {
        Game.ClickCookie();
    }
});



//Game.Notify('thing', 'stuff', [27, 6])
