const ctx = document.getElementById("canvas").getContext("2d"),
    canvas = document.getElementById("canvas");
var mc,
    npcs,
    backGround,
    state = "happy",
    selectNewState = 1;

function gameUpdate(state) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
    mc.draw(state);
}
function gameStart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
    mc = new mainCarecter();
    mc.draw(state);
}
function nextState() {
    if (selectNewState == 4) {
        return console.error("[script:23] ERROR: not a state");
    }
    selectNewState++;
    console.log("[script:19]: SelectNewState+", selectNewState);
}
function lastState() {
    if (selectNewState == 1) {
        return console.error("[script:23] ERROR: not a state");
    }
    selectNewState--;
    console.log("[script:23]: SelectNewState-", selectNewState);
}
function swappState() {
    switch (selectNewState) {
        case 1:
            gameUpdate("happy");
            break;
        case 2:
            gameUpdate("sad");
            break;
        case 3:
            gameUpdate("mad");
            break;
        case 4:
            gameUpdate("calm");
            break;
        default:
            break;
    }
}
class backDrop {}

class mainCarecter {
    position = {
        x: 350,
        y: 350,
    };
    head = {
        size: 20,
        x: this.position.x,
        y: this.position.y - 20,

        hear: {
            size: 19,
            x: this.position.x,
            y: this.position.y - 27,
        },
        mouth: {
            size: 9,
            x: this.position.x,
            y: this.position.y - 12,
        },
        eyeLeft: {
            size: 6,
            x: this.position.x - 10,
            y: this.position.y - 20,

            pupoleLeft: {
                size: 3,
                x: this.position.x - 10,
                y: this.position.y - 20,
            },
        },
        eyeRight: {
            size: 6,
            x: this.position.x + 10,
            y: this.position.y - 20,

            pupoleRight: {
                size: 3,
                x: this.position.x + 10,
                y: this.position.y - 20,
            },
        },
    };
    body = {
        thicknes: 15,
        xStart: this.position.x,
        yStart: this.position.y,
        xEnd: this.position.x,
        yEnd: this.position.y + 40,
        arm: {
            thicknes: 10,
            xStart: this.position.x,
            yStart: this.position.y + 10,

            leftArm: {
                xEnd: this.position.x + 30,
                yEnd: this.position.y + 10,
            },

            rightArm: {
                xEnd: this.position.x - 30,
                yEnd: this.position.y + 10,
            },
        },
        leg: {
            thicknes: 15,
            xStart: this.position.x,
            yStart: this.position.y + 30,
            leftLeg: {
                xEnd: this.position.x + 15,
                yEnd: this.position.y + 60,
            },
            rightLeg: {
                xEnd: this.position.x - 15,
                yEnd: this.position.y + 60,
            },
        },
    };

    draw(state) {
        this.drawHead(state);
        this.drawBody(state);
    }

    drawHead(state) {
        switch (state) {
            case "happy":
                // Draw the mc's head.
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.x, this.head.y, this.head.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(229, 162, 127)"; // set the fill color
                ctx.fill(); // fill the circle
                //lips for the mouth
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.mouth.x, this.head.mouth.y, this.head.mouth.size, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(172, 62, 50)"; // set the fill color
                ctx.fill(); // fill the circle
                // the insids of the mouth
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.mouth.x, this.head.mouth.y + 1, this.head.mouth.size - 4, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle
                // the mc's hear
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.hear.x, this.head.hear.y, this.head.hear.size, Math.PI, 0); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(160, 90, 40)"; // set the fill color
                ctx.fill(); // fill the circle
                break;
            case "sad":
                // Draw the mc's head.
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.x, this.head.y, this.head.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(229, 162, 127)"; // set the fill color
                ctx.fill(); // fill the circle
                //lips for the mouth
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.mouth.x, this.head.mouth.y + 7, this.head.mouth.size, Math.PI, 0); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(172, 62, 50)"; // set the fill color
                ctx.fill(); // fill the circle
                // the insids of the mouth
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.mouth.x, this.head.mouth.y + 7, this.head.mouth.size - 2, Math.PI, 0); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(229, 162, 127)"; // set the fill color
                ctx.fill(); // fill the circle
                // the mc's hear
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.hear.x, this.head.hear.y, this.head.hear.size, Math.PI, 0); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(160, 90, 40)"; // set the fill color
                ctx.fill(); // fill the circle
                break;
            case "mad":
                // Draw the mc's head.
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.x, this.head.y, this.head.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "red"; // set the fill color
                ctx.fill(); // fill the circle
                //lips for the mouth
                ctx.lineWidth = 2;
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.head.mouth.x - 10, this.head.mouth.y + 5);
                ctx.lineTo(this.head.mouth.x + 10, this.head.mouth.y + 5);
                ctx.strokeStyle = "black"; // set the fill color
                ctx.stroke();
                // the mc's hear
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.hear.x, this.head.hear.y, this.head.hear.size, Math.PI, 0); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(160, 90, 40)"; // set the fill color
                ctx.fill(); // fill the circle
                break;
            case "calm":
                // Draw the mc's head.
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.x, this.head.y, this.head.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(229, 162, 127)"; // set the fill color
                ctx.fill(); // fill the circle
                //lips for the mouth
                ctx.lineWidth = 2;
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.head.mouth.x - 10, this.head.mouth.y + 5);
                ctx.lineTo(this.head.mouth.x + 10, this.head.mouth.y + 5);
                ctx.strokeStyle = "black"; // set the fill color
                ctx.stroke();
                // the mc's hear
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.hear.x, this.head.hear.y, this.head.hear.size, Math.PI, 0); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "rgb(160, 90, 40)"; // set the fill color
                ctx.fill(); // fill the circle
                break;
            default:
                console.log("[script:171]: state:", state);
                break;
        }
        this.drawEyes(state);
    }
    drawEyes(state) {
        switch (state) {
            case "happy":
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.x, this.head.eyeLeft.y, this.head.eyeLeft.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.pupoleLeft.x, this.head.eyeLeft.pupoleLeft.y, this.head.eyeLeft.pupoleLeft.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.x, this.head.eyeRight.y, this.head.eyeRight.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.pupoleRight.x, this.head.eyeRight.pupoleRight.y, this.head.eyeRight.pupoleRight.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle
                break;
            case "sad":
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.x, this.head.eyeLeft.y, this.head.eyeLeft.size, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.pupoleLeft.x, this.head.eyeLeft.pupoleLeft.y + 2, this.head.eyeLeft.pupoleLeft.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.x, this.head.eyeRight.y, this.head.eyeRight.size, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.pupoleRight.x, this.head.eyeRight.pupoleRight.y + 2, this.head.eyeRight.pupoleRight.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle
                break;
            case "mad":
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.x, this.head.eyeLeft.y, this.head.eyeLeft.size, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.pupoleLeft.x, this.head.eyeLeft.pupoleLeft.y, this.head.eyeLeft.pupoleLeft.size, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.x, this.head.eyeRight.y, this.head.eyeRight.size, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.pupoleRight.x, this.head.eyeRight.pupoleRight.y, this.head.eyeRight.pupoleRight.size, 0, Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle
                break;
            case "calm":
                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.x, this.head.eyeLeft.y, this.head.eyeLeft.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeLeft.pupoleLeft.x, this.head.eyeLeft.pupoleLeft.y, this.head.eyeLeft.pupoleLeft.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.x, this.head.eyeRight.y, this.head.eyeRight.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "white"; // set the fill color
                ctx.fill(); // fill the circle

                ctx.beginPath(); // begin the path
                ctx.arc(this.head.eyeRight.pupoleRight.x, this.head.eyeRight.pupoleRight.y, this.head.eyeRight.pupoleRight.size, 0, 2 * Math.PI); // center x, center y, radius, start angle, end angle
                ctx.fillStyle = "black"; // set the fill color
                ctx.fill(); // fill the circle
                break;

            default:
                break;
        }
    }
    drawBody(state) {
        switch (state) {
            case "happy":
                ctx.lineWidth = this.body.thicknes;
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.xStart, this.body.yStart); // move to starting point
                ctx.lineTo(this.body.xEnd, this.body.yEnd); // draw a line to ending point
                ctx.strokeStyle = "blue";
                ctx.stroke();
                this.drawArms(state);
                this.drawLegs(state);
                break;
            case "sad":
                ctx.lineWidth = this.body.thicknes;
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.xStart, this.body.yStart); // move to starting point
                ctx.lineTo(this.body.xEnd, this.body.yEnd); // draw a line to ending point
                ctx.strokeStyle = "blue";
                ctx.stroke();
                this.drawArms(state);
                this.drawLegs(state);
                break;
            case "mad":
                ctx.lineWidth = this.body.thicknes;
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.xStart, this.body.yStart); // move to starting point
                ctx.lineTo(this.body.xEnd, this.body.yEnd); // draw a line to ending point
                ctx.strokeStyle = "blue";
                ctx.stroke();
                this.drawArms(state);
                this.drawLegs(state);
                break;
            case "calm":
                ctx.lineWidth = this.body.thicknes;
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.xStart, this.body.yStart); // move to starting point
                ctx.lineTo(this.body.xEnd, this.body.yEnd); // draw a line to ending point
                ctx.strokeStyle = "blue";
                ctx.stroke();
                this.drawArms(state);
                this.drawLegs(state);
                break;

            default:
                break;
        }
        //mc's body.
    }
    drawArms(state) {
        switch (state) {
            case "happy":
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.leftArm.xEnd, this.body.arm.leftArm.yEnd); // draw a line to ending point
                ctx.stroke();
                //mc's Right Arm
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.rightArm.xEnd, this.body.arm.rightArm.yEnd); // draw a line to ending point
                ctx.stroke();
                break;
            case "sad":
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.leftArm.xEnd, this.body.arm.leftArm.yEnd); // draw a line to ending point
                ctx.stroke();
                //mc's Right Arm
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.rightArm.xEnd, this.body.arm.rightArm.yEnd); // draw a line to ending point
                ctx.stroke();
                break;
            case "mad":
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.leftArm.xEnd, this.body.arm.leftArm.yEnd); // draw a line to ending point
                ctx.stroke();
                //mc's Right Arm
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.rightArm.xEnd, this.body.arm.rightArm.yEnd); // draw a line to ending point
                ctx.stroke();
                break;
            case "calm":
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.leftArm.xEnd, this.body.arm.leftArm.yEnd + 20); // draw a line to ending point
                ctx.stroke();
                //mc's Right Arm
                ctx.lineWidth = this.body.arm.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.arm.xStart, this.body.arm.yStart); // move to starting point
                ctx.lineTo(this.body.arm.rightArm.xEnd, this.body.arm.rightArm.yEnd + 20); // draw a line to ending point
                ctx.stroke();
                break;

            default:
                break;
        }
        //mc's Left Arm
    }
    drawLegs(state) {
        switch (state) {
            case "happy":
                //mc's Left Leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.leftLeg.xEnd, this.body.leg.leftLeg.yEnd); // draw a line to ending point
                ctx.strokeStyle = "gray";
                ctx.stroke();
                //mc's Right leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.rightLeg.xEnd, this.body.leg.rightLeg.yEnd); // draw a line to ending point
                ctx.stroke();
                break;
            case "sad":
                //mc's Left Leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.leftLeg.xEnd, this.body.leg.leftLeg.yEnd); // draw a line to ending point
                ctx.strokeStyle = "gray";
                ctx.stroke();
                //mc's Right leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.rightLeg.xEnd, this.body.leg.rightLeg.yEnd); // draw a line to ending point
                ctx.stroke();
                break;
            case "mad":
                //mc's Left Leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.leftLeg.xEnd, this.body.leg.leftLeg.yEnd); // draw a line to ending point
                ctx.strokeStyle = "gray";
                ctx.stroke();
                //mc's Right leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.rightLeg.xEnd, this.body.leg.rightLeg.yEnd); // draw a line to ending point
                ctx.stroke();
                break;
            case "calm":
                //mc's Left Leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.leftLeg.xEnd, this.body.leg.leftLeg.yEnd); // draw a line to ending point
                ctx.strokeStyle = "gray";
                ctx.stroke();
                //mc's Right leg
                ctx.lineWidth = this.body.leg.thicknes; // set the line width to its thiknes
                ctx.beginPath(); // begin the path
                ctx.moveTo(this.body.leg.xStart, this.body.leg.yStart); // move to starting point
                ctx.lineTo(this.body.leg.rightLeg.xEnd, this.body.leg.rightLeg.yEnd); // draw a line to ending point
                ctx.stroke();
                break;

            default:
                break;
        }
    }
}

class sideCarecters {
    position = {
        x: 0,
        y: 0,
    };
}
// this NEEDS to be at the bottom!!!
window.onload = gameStart();
// always att the bottom!!!
