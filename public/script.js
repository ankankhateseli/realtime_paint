let socket;
let randomColor;
function setup() {
    noStroke()
    createCanvas(1000, 1000);
    background('grey');
    socket = io.connect('https://arkhsketchio.herokuapp.com/')

}
function draw() {
    randomColor = floor(random(255));
    socket.on('mouse', data => {
        rectMode(CENTER);
        fill('#f6a6df;');
        ellipse(data.x, data.y, 40, 40);
    })
}
function mouseDragged() {
    randomColor = random(255);
    fill(0, randomColor, 0)
    ellipse(mouseX, mouseY, 50, 50);
    socket.emit('mouse', {
        x: mouseX,
        y: mouseY,
        randomColor: randomColor
    })
}