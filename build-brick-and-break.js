let brickCount = 0;

export function build(brickQuantity) {
    for (let i = 0; i < brickQuantity; i++) {
        setTimeout(() => {
            const brick = document.createElement('div');
            brickCount++;
            brick.id = `brick-${brickCount}`;
            brick.textContent = brickCount;
            const prevBrick = document.getElementById('brick-' + (brickCount - 1).toString());
            document.body.insertBefore(brick, prevBrick);
            if (brickCount > 18 && brickCount <= 36) {
                brick.dataset.foundation = 'true';
            }
        }, i * 100);
    }
}

export function repair(...ids) {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            if (brick.dataset.foundation === 'true') {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    });
}

export function destroy() {
    const lastBrick = document.querySelector('div:last-child')
    lastBrick.remove();
    brickCount--;
}
