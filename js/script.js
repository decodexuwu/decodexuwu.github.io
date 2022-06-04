
function getIconVar() {
    var iconVar = Math.floor(Math.random() * (8 - 1)) + 1; 

    if (iconVar == 1) {
        document.getElementById("gd-icon").src = "img/animation/cube.png";
        document.getElementById("gd-icon").style.animation = "cube 1s infinite alternate";
    }

    if (iconVar == 2) {
        document.getElementById("gd-icon").src = "img/animation/ship.png";
        document.getElementById("gd-icon").style.animation = "ship 1s infinite alternate";
    }

    if (iconVar == 3) {
        document.getElementById("gd-icon").src = "img/animation/ufo.png";
        document.getElementById("gd-icon").style.animation = "ufo 1s infinite alternate";
    }

    if (iconVar == 4) {
        document.getElementById("gd-icon").src = "img/animation/ball.png";
        document.getElementById("gd-icon").style.animation = "ball 1s infinite";
    }

    if (iconVar == 5) {
        document.getElementById("gd-icon").src = "img/animation/wave.png";
        document.getElementById("gd-icon").style.animation = "ease-in-out wave 1s infinite reverse";
    }

    if (iconVar == 6) {
        document.getElementById("gd-icon").src = "img/animation/robot.png";
        document.getElementById("gd-icon").style.animation = "robot 1s infinite alternate";
    }

    if (iconVar == 7) {
        document.getElementById("gd-icon").src = "img/animation/spider.png";
        document.getElementById("gd-icon").style.animation = "spider 3s infinite alternate";
    }

    if (iconVar == 8) {
         document.getElementById("gd-icon").src = "img/animation/swing.png";
        document.getElementById("gd-icon").style.animation = "ufo 1s infinite alternate";
    }

}

