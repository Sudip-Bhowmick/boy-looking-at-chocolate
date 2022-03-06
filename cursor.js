const eyeballs = document.querySelector(".eyeballs");

let cursorPos = { x: 0, y: 0 };

function mousemove(e) {
    cursorPos = { x: e.clientX, y: e.clientY } 
    initFolow();
}

const followCursor = (el, xRatio, yRatio) => {
    const elOffset = el.getBoundingClientRect();
    const centerX = elOffset.x + elOffset.width / 2;
    const centerY = elOffset.y + elOffset.height / 2;
    const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / window.innerWidth);
    const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / window.innerHeight);  
    el.style.transform = `translate(${distanceLeft / xRatio}px, ${distanceTop / yRatio}px)`;
}

const initFolow = () => {
    if (eyeballs) {
        followCursor(eyeballs, 7, 7)
    }
}

let wW = window.innerWidth;
let wH = window.innerHeight;

function setWindowSize() {
    wW = window.innerWidth;
    wH = window.innerHeight;
};


window.addEventListener("mousemove", mousemove);