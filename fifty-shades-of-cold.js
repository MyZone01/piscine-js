import { colors } from "./fifty-shades-of-cold.data.js"

export function generateClasses() {
    const head = document.querySelector('head');
    const style = document.createElement('style');

    for (const color of colors) {
        style.appendChild(document.createTextNode(`.${color} { background: ${color}; }`));
    }

    head.appendChild(style);
}

export function generateColdShades() {
    const body = document.querySelector('body');

    for (const color of colors) {
        if (color.includes('aqua') || color.includes('blue') || color.includes('turquoise') ||
            color.includes('green') || color.includes('cyan') || color.includes('navy') ||
            color.includes('purple')) {
            const div = document.createElement('div');
            div.classList.add(color);
            div.classList.add('color-box');
            div.textContent = color;
            body.appendChild(div);
        }
    }
}

export function choseShade(shade) {
    const colorBoxes = document.querySelectorAll('.color-box');

    for (const box of colorBoxes) {
        box.className = '';
        box.classList.add(shade);
        box.classList.add('color-box');
        box.textContent = shade;
    }
}
