let socket;
let color;
function setup() {
    color = '#f6a6df';
    noStroke()
    createCanvas(1000, 1000);
    background('grey');
    socket = io.connect('https://arkhsketchio.herokuapp.com/')
}
function draw() {
    socket.on('mouse', data => {
        rectMode(CENTER);
        fill(color);
        ellipse(data.x, data.y, 40, 40);
    });
}
function mouseDragged() {
    fill('black');
    ellipse(mouseX, mouseY, 50, 50);
    socket.emit('mouse', {
        x: mouseX,
        y: mouseY,
        color:color
    })
}