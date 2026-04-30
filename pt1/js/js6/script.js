const MAX = 8;
let dots = [];
let isDrawing = 0;

document.addEventListener('mousemove', function(event) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${event.pageX}px`;
    dot.style.top = `${event.pageY}px`;
    document.body.appendChild(dot);
    dots.push(dot);
    if (isDrawing) {
        return;
    }
    while (dots.length > MAX) {
        const oldDot = dots.shift();
        oldDot.remove();
    }
    setTimeout(() => {
        dot.remove();
    }, 100);
});

document.addEventListener('click', function() {
    isDrawing ^= 1;
});
