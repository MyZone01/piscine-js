
export function pick() {
    const body = document.body;
    const hslDiv = document.createElement('div');
    hslDiv.classList.add('text', 'hsl');
    hslDiv.style.top = '50%';
    hslDiv.style.left = '50%';
    hslDiv.style.transform = 'translate(-50%, -50%)';
    body.appendChild(hslDiv);

    const hueDiv = document.createElement('div');
    hueDiv.classList.add('text', 'hue');
    body.appendChild(hueDiv);

    const luminosityDiv = document.createElement('div');
    luminosityDiv.classList.add('text', 'luminosity');
    body.appendChild(luminosityDiv);

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'height', window.innerHeight)
    svg.setAttributeNS(null, 'width', window.innerWidth)

    const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.setAttributeNS(null, 'id', 'axisX')
    axisY.setAttributeNS(null, 'y1', 0)
    axisY.setAttributeNS(null, 'y2', 0)
    axisY.setAttributeNS(null, 'x1', 0)
    axisY.setAttributeNS(null, 'x2', 0)
    axisY.style.stroke = 'white'
    axisY.style.strokeWidth = '1'

    const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttributeNS(null, 'id', 'axisY')
    axisX.setAttributeNS(null, 'x1', 0)
    axisX.setAttributeNS(null, 'x2', 0)
    axisX.setAttributeNS(null, 'y1', 0)
    axisX.setAttributeNS(null, 'y2', 0)
    axisX.style.stroke = 'white'
    axisX.style.strokeWidth = '1'
    svg.append(axisX, axisY)
    body.appendChild(svg);

    body.addEventListener('mousemove', event => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const hue = Math.round((mouseX / window.innerWidth) * 360);
        const luminosity = Math.round((mouseY / window.innerHeight) * 100);
        body.style.backgroundColor = `hsl(${hue}, 100%, ${luminosity}%)`;
        hslDiv.textContent = `hsl(${hue}, 100%, ${luminosity}%)`;
        hueDiv.textContent = `${hue}°`;
        luminosityDiv.textContent = `${luminosity}%`;

        axisX.setAttributeNS(null, 'x1', 0)
        axisX.setAttributeNS(null, 'x2', window.innerWidth)
        axisX.setAttributeNS(null, 'y1', event.clientY)
        axisX.setAttributeNS(null, 'y2', event.clientY)

        axisY.setAttributeNS(null, 'y1', 0)
        axisY.setAttributeNS(null, 'y2', window.innerHeight)
        axisY.setAttributeNS(null, 'x1', event.clientX)
        axisY.setAttributeNS(null, 'x2', event.clientX)

        axisX.style.stroke = 'white'
        axisX.style.strokeWidth = '1'
        axisY.style.stroke = 'white'
        axisY.style.strokeWidth = '1'
    });

    body.addEventListener('click', () => {
        const hslValue = hslDiv.textContent;
        navigator.clipboard.writeText(hslValue)
        alert(`Copied: ${hslValue}`);
    });
}
