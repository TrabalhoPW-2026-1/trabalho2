function getAll(selector) {
    return document.querySelectorAll(selector);
}

function toPx(value) {
    value = parseInt(value);
    return `${value*10}px`;
}

function positionLabel(input, label) {
    const percent = (input.value - (input.min || 0)) / ((input.max || 100) - (input.min || 0));
    const rect = input.getBoundingClientRect();

    if (rect.height > rect.width) {
        label.style.left = (rect.right + scrollX + 5) + 'px';
        label.style.top = (rect.bottom + scrollY - percent * rect.height) + 'px';
    } else {
        label.style.left = (rect.left + scrollX + percent * rect.width) + 'px';
        label.style.top = (rect.bottom + scrollY + 5) + 'px';
    }
}

const inputs = getAll('input');
const bars = getAll('.chart *');
const labels = getAll('span');
let n = inputs.length - 1;

for (let i = 0; i < n; i++) {
    let height = parseInt(Math.random() * 10 + 1);
    inputs[i].value = height;
    labels[i].textContent = height;
    bars[i].style.height = toPx(height);
    bars[i].style.width = '100px';
    positionLabel(inputs[i], labels[i]);

    inputs[i].addEventListener('input', function() {
        bars[i].style.height = toPx(this.value);
        labels[i].textContent = this.value;
        positionLabel(this, labels[i]);
        labels[i].style.display = 'block';
    });

    inputs[i].addEventListener('mouseup', function() {
        labels[i].style.display = 'none';
    });
}

labels[n].textContent = inputs[n].value;
positionLabel(inputs[n], labels[n]);
inputs[n].addEventListener('input', function() {
    for (let bar of bars) {
        bar.style.width = toPx(this.value);
    }
    labels[n].textContent = this.value;
    positionLabel(this, labels[n]);
    labels[n].style.display = 'block';
});

inputs[n].addEventListener('mouseup', function() {
    labels[n].style.display = 'none';
});
