const ctx = document.getElementById("canvas").getContext("2d"),
    canvas = document.getElementById("canvas");
var canvasHeight = document.getElementById("canvas").height,
    canvasWidth = document.getElementById("canvas").width;

var blockPos = {
    0: {
        x: 0,
        y: 0,
    },
    1: {
        x: 100,
        y: 0,
    },
    2: {
        x: 200,
        y: 0,
    },
    3: {
        x: 0,
        y: 100,
    },
    4: {
        x: 100,
        y: 100,
    },
    5: {
        x: 200,
        y: 100,
    },
    6: {
        x: 0,
        y: 200,
    },
    7: {
        x: 100,
        y: 200,
    },
    8: {
        x: 200,
        y: 200,
    },
};
function draw() {
    for (let i = 0; i < 9; i++) {
        var curntBlock = blockPos[i];
        ctx.beginPath();
        ctx.rect(curntBlock.x, curntBlock.y, 100, 100);
        ctx.fillStyle = "black";
        ctx.stroke();
        console.log(blockPos[i]);
    }
}
window.onload = draw();
