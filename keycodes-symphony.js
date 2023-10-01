export function compose() {
    document.addEventListener('keydown', event => {
        const key = event.key;
        if (key === 'Backspace') {
            document.querySelector('div:last-child').remove();
        } else if (key === 'Escape') {
            let createdDivs = document.querySelectorAll('div')
            for (let i = 0; i < createdDivs.length; i++)
                createdDivs[i].remove()
        } else if (/^[a-z]$/.test(key)) {
            const note = document.createElement('div');
            note.classList.add('note');
            note.style.backgroundColor = generateBackgroundColor(key);
            note.textContent = key;
            document.body.appendChild(note);
        }
    });
}

function generateBackgroundColor(key) {
    const colorValue = key.charCodeAt(0) * 10;
    return `hsl(${colorValue % 360}, 50%, 50%)`;
}
