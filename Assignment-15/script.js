let isOn = false;
function toggleBulb() {
    const bulb = document.getElementById("bulb");
    if (isOn) {
        bulb.src = "./images/bulb-off.png";
        isOn = false;
    } else {
        bulb.src = "./images/bulb-on.jpg";
        isOn = true;
    }
}

