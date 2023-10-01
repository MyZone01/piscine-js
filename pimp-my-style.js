import { styles } from './pimp-my-style.data.js';

let currentIndex = 0;

export const pimp = () => {
    const button = document.querySelector('.button');
    const styleClass = styles[currentIndex];
    button.classList.add(styleClass);
    button.classList.toggle('unpimp');
    currentIndex = (currentIndex + 1) % styles.length;
}
