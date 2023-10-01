export function createCircle() {
    document.addEventListener('click', event => {
        const newCirc = document.createElement('div');
        newCirc.classList.add('circle');
        newCirc.style.background = 'white';
        let x = event.clientX - 25;
        let y = event.clientY - 25;
        newCirc.style.left = `${x}px`;
        newCirc.style.top = `${y}px`;
        document.body.appendChild(newCirc);
    });
}

export function moveCircle() {
    document.addEventListener('mousemove', event => {
        const circles = document.querySelectorAll('.circle');
        const midBox = document.querySelector('.box');
        const dims = midBox.getBoundingClientRect();

        circles.forEach(circle => {
            const left = parseInt(circle.style.left);
            const top = parseInt(circle.style.top);

            if (
                left >= dims.left + 1 &&
                left + 50 <= dims.right - 1 &&
                top >= dims.top + 1 &&
                top + 50 <= dims.bottom - 1
            ) {
                circle.style.background = 'var(--purple)';
            } else {
                circle.style.background = 'white';
            }

            if (left < dims.left + 1) {
                circle.style.left = `${dims.left + 1}px`;
            } else if (left + 50 > dims.right - 1) {
                circle.style.left = `${dims.right - 51}px`;
            }

            if (top < dims.top + 1) {
                circle.style.top = `${dims.top + 1}px`;
            } else if (top + 50 > dims.bottom - 1) {
                circle.style.top = `${dims.bottom - 51}px`;
            }
        });
    });
}

export function setBox() {
    const centerBox = document.createElement('div');
    centerBox.classList.add('box');
    document.body.appendChild(centerBox);
}
