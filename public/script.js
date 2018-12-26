let socket;
let randomColor;
function setup() {
    noStroke()
    createCanvas(1000, 1000);
    background('grey');
    socket = io.connect('https://arkhsketchio.herokuapp.com/')

}
function draw() {
    socket.on('mouse', data => {
        rectMode(CENTER);
        fill(data.randomColor, data.randomColor, data.randomColor)
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