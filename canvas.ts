var canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");

var context:CanvasRenderingContext2D = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
var innerRadius = 20;
var distance = 30;

var x1 = centerX - radius - distance;
var x2 = centerX + radius;

clear();
drawEyes({x: 0, y: 0});
drawMouth();

function drawEyes(direction) {
    drawEye(context, x1, centerY, direction);
    drawEye(context, x2, centerY, direction);
}

function clear() {
    context.fillStyle = "white";
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function mouseToPupilSimple(x, y, direction) {
    var offsetX = 10;
    var offsetY = 10;

    var pupilX = x;
    var pupilY = y;

    if (direction.x < x) {
        pupilX -= offsetX;
    } else {
        pupilX += offsetX;
    }

    if (direction.y < y) {
        pupilY -= offsetY;
    } else {
        pupilY += offsetY;
    }
    return {x: pupilX, y: pupilY};
}


function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function mouseToPupil(x, y, direction) {
    var offsetX = 20;
    var offsetY = 20;

    var maxDistance = dist(0, 0, canvas.width, canvas.height);
    var mouseDistance = dist(x, y, direction.x, direction.y);
    var scale = mouseDistance / maxDistance;

    var pupilX = x;
    var pupilY = y;

    if (direction.x < x) {
        pupilX -= offsetX * scale;
    } else {
        pupilX += offsetX * scale;
    }

    if (direction.y < y) {
        pupilY -= offsetY * scale;
    } else {
        pupilY += offsetY * scale;
    }
    return {x: pupilX, y: pupilY};
}

function drawMouth() {
    context.beginPath();
    context.arc(centerX, centerY + 1.5 * radius, radius, 0.1, 1 * Math.PI, false);
    context.strokeStyle = '#000000';
    context.lineWidth = 4;
    context.stroke();
    context.closePath();

}

function drawEye(context: CanvasRenderingContext2D, x, y, direction) {

    // Eye
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.strokeStyle = '#000000';
    context.lineWidth = 4;
    context.stroke();
    context.closePath();


    var pupilPosition =  mouseToPupil(x, y, direction);
    var pupilX = pupilPosition.x;
    var pupilY = pupilPosition.y;

    // Pupil
    context.beginPath();
    context.arc(pupilX, pupilY, innerRadius, 0, 2 * Math.PI, false);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();

}

var body = document.getElementsByTagName('body')[0];
body.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    clear();
    drawEyes({x: x, y: y});
    drawMouth()
};
