import { gossips } from './gossip-grid.data.js';

export function grid() {
    const body = document.body;
    const gossipForm = document.createElement('div');
    gossipForm.classList.add('gossip', 'fade-in');
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Share gossip!';
    const addButton = document.createElement('button');
    addButton.textContent = 'Share gossip!';
    addButton.addEventListener('click', () => {
        const gossipText = textarea.value.trim();
        if (gossipText) {
            const newGossip = document.createElement('div');
            newGossip.classList.add('gossip', 'fade-in');
            newGossip.textContent = gossipText;
            body.insertBefore(newGossip, gossipForm.nextSibling);
            textarea.value = '';
        }
    });

    gossipForm.appendChild(textarea);
    gossipForm.appendChild(addButton);
    body.appendChild(gossipForm);
    const rangesDiv = document.createElement('div');
    rangesDiv.classList.add('ranges');

    const widthRangeDiv = createRangeInput('width', 'Width:', 200, 800, 250);
    const fontSizeRangeDiv = createRangeInput('fontSize', 'Font Size:', 20, 40, 20);
    const backgroundRangeDiv = createRangeInput('background', 'Background:', 20, 75, 20);

    rangesDiv.appendChild(widthRangeDiv);
    rangesDiv.appendChild(fontSizeRangeDiv);
    rangesDiv.appendChild(backgroundRangeDiv);
    body.appendChild(rangesDiv);
    for (const gossipText of gossips) {
        const gossipCard = document.createElement('div');
        gossipCard.classList.add('gossip', 'fade-in');
        gossipCard.textContent = gossipText;
        body.appendChild(gossipCard);
    }
}

function createRangeInput(id, labelText, minValue, maxValue, defaultValue) {
    const rangeDiv = document.createElement('div');
    rangeDiv.classList.add('range');
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;
    const span = document.createElement('span');
    span.textContent = defaultValue;

    const input = document.createElement('input');
    input.setAttribute('type', 'range');
    input.setAttribute('id', id);
    input.setAttribute('min', minValue);
    input.setAttribute('max', maxValue);
    input.setAttribute('value', defaultValue);

    input.addEventListener('input', () => {
        span.textContent = input.value;
        applyStyleChanges();
    });

    rangeDiv.appendChild(label);
    rangeDiv.appendChild(input);
    rangeDiv.appendChild(span);

    return rangeDiv;
}

function applyStyleChanges() {
    const width = document.getElementById('width').value + 'px';
    const fontSize = document.getElementById('fontSize').value + 'px';
    const background = `hsl(280, 50%, ${document.getElementById('background').value}%)`;

    const gossipCards = document.querySelectorAll('.gossip');
    for (const card of gossipCards) {
        card.style.width = width;
        card.style.fontSize = fontSize;
        card.style.backgroundColor = background;
    }
}
