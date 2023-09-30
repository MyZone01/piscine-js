let value = 1
let pos = 0

export const build = (x) => {
    const buildBrick = () => {
        const newDiv = document.createElement("div");
        newDiv.setAttribute('id', 'brick-' + value.toString())
        value++

        if (pos === 1) newDiv.setAttribute('data-foundation', 'true')
        pos++
        if (pos === 3) pos = 0

        const currentDiv = document.getElementById('brick-' + (value - 1).toString());
        document.body.insertBefore(newDiv, currentDiv);
    }
    const start = setInterval(buildBrick, 100)

    setTimeout(stop_interval, x * 100);
    const stop_interval = () => clearInterval(start);
}



export const destroy = () => {
    const lastBrick = document.querySelector('div:last-child')
    lastBrick.remove();
}

export const repair = (...htmlIds) => {
    let ids = Array.from(htmlIds)

    const repairer = (ids) => {
        const curr = document.getElementById(ids)
        if (curr.hasAttribute('data-foundation')) {
            curr.setAttribute('data-repaired', 'in progress')
        } else {
            curr.setAttribute('data-repaired', 'true')
        }
    }

    ids.forEach(element => {
        repairer(element)
    })
}