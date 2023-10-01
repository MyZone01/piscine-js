
export function createCircle() {
    document.addEventListener('click', event => {
        const newCircle = document.createElement('div');
        newCircle.classList.add('circle');
        newCircle.style.background = 'white';
        newCircle.style.left = (event.clientX - 25) + 'px';
        newCircle.style.top = (event.clientY - 25) + 'px';
        document.body.appendChild(newCircle);
    });
}

export function moveCircle() {
    document.addEventListener('mousemove', event => {
        const lastCircle = document.querySelector('div:last-child');
        if (lastCircle) {
            const box = document.querySelector('.box');
            const circleRect = lastCircle.getBoundingClientRect();
            const boxRect = box.getBoundingClientRect();
            const isInsideBox =
                circleRect.left >= boxRect.left + 1 &&
                circleRect.right <= boxRect.right - 1 &&
                circleRect.top >= boxRect.top + 1 &&
                circleRect.bottom <= boxRect.bottom - 1;
            if (isInsideBox) {
                lastCircle.style.left = Math.min(
                    Math.max(event.clientX - circleRect.width / 2, boxRect.left + 1),
                    boxRect.right - circleRect.width - 1
                ) + 'px';

                lastCircle.style.top = Math.min(
                    Math.max(event.clientY - circleRect.height / 2, boxRect.top + 1),
                    boxRect.bottom - circleRect.height - 1
                ) + 'px';

                lastCircle.style.background = 'var(--purple)';
            } else {
                lastCircle.style.left = (event.clientX - 25) + 'px';
                lastCircle.style.top = (event.clientY - 25) + 'px';
            }
        }
    });
}

export function setBox() {
    const centerBox = document.createElement('div');
    centerBox.classList.add('box');
    document.body.appendChild(centerBox);
}
