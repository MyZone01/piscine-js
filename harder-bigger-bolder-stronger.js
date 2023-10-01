let letterNumber = 0;

export function generateLetters() {
    for (let i = 0; i < 120; i++) {
        const letter = document.createElement('div');
        letter.id = `letter-${letterNumber}`;
        letterNumber++;
        letter.textContent = getRandomLetter();
        letter.style.fontSize = `${11 + i}px`;

        const prevLetter = document.getElementById(`letter-${letterNumber - 1}`);

        if (i < 40) {
            letter.style.fontWeight = '300';
        } else if (i < 80) {
            letter.style.fontWeight = '400';
        } else {
            letter.style.fontWeight = '600';
        }

        document.body.insertBefore(letter, prevLetter);
    }
}

function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}
