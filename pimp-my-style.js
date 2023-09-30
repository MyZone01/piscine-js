import { styles } from "./pimp-my-style.data.js";
let index = 0
export function pimp() {
    var classVal = document.getElementsByClassName('button')[0]

    if (index == styles.length - 1) {
        index = 0
    } else if (classVal.classList.contains('unpimp')) {
        if (classVal.classList.length == 3) {
            const lastClass = Array.prototype.slice.call(classVal.classList)
            classVal.classList.remove(lastClass[classVal.classList.length - 2])
            classVal.classList.remove('unpimp')
        } else {
            const lastClass = Array.prototype.slice.call(classVal.classList)
            classVal.classList.remove(lastClass[classVal.classList.length - 2])
        }
    } else {
        let addValue = styles[index]
        classVal.classList.add(addValue)
        index++
    }
}