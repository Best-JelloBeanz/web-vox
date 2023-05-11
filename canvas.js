var canvas = document.getElementById("index");
var context = canvas.getContext('2d');

// source for this code: https://riptutorial.com/html5-canvas/example/11659/detecting-mouse-position-on-the-canvas

canvas.addEventListener("mousemove", function(e) { 
    var cRect = canvas.getBoundingClientRect();
    var canvasX = Math.round(e.clientX - cRect.left);
    var canvasY = Math.round(e.clientY - cRect.top);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
});
