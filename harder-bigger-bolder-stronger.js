let idVal = 1
let fontSizeNum = 11


export function generateLetters() {

    function newLetterdiv() {
        const newDiv = document.createElement("div");
        newDiv.setAttribute('id', idVal.toString())
        const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const newContent = document.createTextNode(alpha[Math.floor(Math.random() * alpha.length)]);

        newDiv.append(newContent);
        newDiv.style.fontSize = fontSizeNum.toString() + 'px'
        fontSizeNum++

        if (idVal <= 40) {
            newDiv.style.fontWeight = '300';
        } else if (idVal <= 80 && idVal > 40) {
            newDiv.style.fontWeight = '400';
        } else if (idVal > 80) {
            newDiv.style.fontWeight = '600';
        }
        idVal++

        const currentDiv = document.getElementById((idVal - 1).toString());
        document.body.insertBefore(newDiv, currentDiv);
    }

    while (idVal <= 120)
        newLetterdiv()
}