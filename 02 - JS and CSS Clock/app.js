const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hour-hand");
const digit = document.querySelector("#digital");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secDeg = ((seconds/60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    
    const mins = now.getMinutes();
    const minDeg = ((mins/60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    
    const hr = now.getHours();
    const hrDeg = ((hr/12) * 360) + 90;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
    digit.innerText = `${hr} : ${mins} : ${seconds}`;
}

setInterval(setDate, 1000);