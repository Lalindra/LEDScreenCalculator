function greeting() {

    console.log("Hello World");
}


// Single cube draw and display
function drawCube(cubeWidth, cubeHeight) {
    // Get elements of Draw canvas and Parent
    const canvas = document.getElementById("cube-container");
    const canvasCube = document.getElementById("cubeCanvas");

    // Equal the canvas height and width to parent sizes
    canvasCube.width = canvas.offsetWidth;
    canvasCube.height = canvas.offsetHeight;

    const ctx = canvasCube.getContext("2d");
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    
    const hTextPos = canvasWidth/2;
    const vTextPos = canvasHeight/2;

    // Center coordinates for rectangle:
    const x = (canvasWidth - cubeWidth) / 2 ;
    const y = (canvasHeight - cubeHeight) / 2;

    console.log(x, y);

    ctx.fillStyle = "#ffc700"; // Set fill color for rectangle
    ctx.fillRect(x, y, cubeWidth, cubeHeight);

    ctx.font = "12px 'Fira Code'"; // Set font for measurements
    ctx.fillStyle = "white"; // Set fill color for text

    // Top measurement:
    ctx.textAlign = "center"; // Align text to left edge
    ctx.fillText(cubeWidth + "mm", hTextPos, y + cubeHeight + 20); // Start at top-left corner

    // Side measurement:
    ctx.save(); // Save current context state
    ctx.translate(x + cubeWidth, vTextPos); // Translate to bottom-right corner for rotation
    ctx.rotate(-Math.PI / 2); // Rotate counterclockwise
    ctx.textAlign = "center"; // Align text to left edge (now aligned with bottom edge)
    ctx.fillText(cubeHeight + "mm", 0, 20); // Start at rotated bottom-left corner
    ctx.restore(); // Restore context state
}

// LED Screen Draw and Display
function drawWall(wallWidth, wallHeight) {
    // Get elements of Draw canvas and Parent
    const canvas = document.getElementById("wall-container");
    const canvasCube = document.getElementById("wallCanvas");

    // Equal the canvas height and width to parent sizes
    canvasCube.width = canvas.offsetWidth;
    canvasCube.height = canvas.offsetHeight;

    const ctx = canvasCube.getContext("2d");
    
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    
    const hTextPos = canvasWidth/2;
    const vTextPos = canvasHeight/2;

    // Center coordinates for rectangle:
    const x = (canvasWidth - wallWidth) / 2 ;
    const y = (canvasHeight - wallHeight) / 2;

    console.log(x, y);

    ctx.fillStyle = "#ffc700"; // Set fill color for rectangle
    ctx.fillRect(x, y, wallWidth, wallHeight);

    ctx.font = "12px 'Fira Code'"; // Set font for measurements
    ctx.fillStyle = "white"; // Set fill color for text

    // Top measurement:
    ctx.textAlign = "center"; // Align text to left edge
    ctx.fillText(wallWidth + "m", hTextPos, y + wallHeight + 20); // Start at top-left corner

    // Side measurement:
    ctx.save(); // Save current context state
    ctx.translate(x + wallWidth, vTextPos); // Translate to bottom-right corner for rotation
    ctx.rotate(-Math.PI / 2); // Rotate counterclockwise
    ctx.textAlign = "center"; // Align text to left edge (now aligned with bottom edge)
    ctx.fillText(wallHeight + "m", 0, 20); // Start at rotated bottom-left corner
    ctx.restore(); // Restore context state
}

// function calls

drawCube(100, 200);
drawWall(400,200);

function resize(){
    console.log("width: " + window.innerWidth);
    console.log("height" + window.innerHeight);
    drawCube(100,200);
    drawWall(400,200);
}

window.onresize = resize;