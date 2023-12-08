function setup() {
    let canvasWidth = 800;
    let canvasHeight = 600;
    createCanvas(canvasWidth, canvasHeight);
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        stroke(0);
        strokeWeight(4);

        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
}
