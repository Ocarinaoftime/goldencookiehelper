window.requestAnimationFrame(loop)
function loop() {
    if (document.getElementById("shimmers").hasChildNodes()) {
        h.innerHTML = `${document.getElementById("shimmers").childElementCount} golden/wrath cookie(s) is on screen!`;
    } else {
        h.innerHTML = "No golden/wrath cookies on screen.";
    }
    window.requestAnimationFrame(loop);
}
var h = document.createElement("div");h.style.position = "absolute";
h.style.fontSize = '20px';
h.innerHTML = "No golden/wrath cookies on screen.";
h.style.left = "0px";
h.style.top = '0px';
document.body.append(h);
document.addEventListener("keypress", (event) => {
    if (event.key == " ") {
        Game.ClickCookie();
    } else {
        //Do nothing
    }
});
