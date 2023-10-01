export const getArchitects = () => {
    const architects = [...document.getElementsByTagName('a')];
    const nonArchitects = [...document.querySelectorAll('span:not(.classical)')];
    return [architects, nonArchitects];
};

export const getClassical = () => {
    const classicalArchitects = [...document.querySelectorAll('a.classical')];
    const nonClassicalArchitects = [...document.querySelectorAll('a:not(.classical)')];
    return [classicalArchitects, nonClassicalArchitects];
};

export const getActive = () => {
    const classicalArchitects = [...document.querySelectorAll('a.classical.active')];
    const nonActiveClassicalArchitects = [...document.querySelectorAll('a.classical:not(.active)')];
    return [classicalArchitects, nonActiveClassicalArchitects];
};

export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const otherActiveClassicalArchitects = [
        ...document.querySelectorAll('a.classical.active:not(#BonannoPisano)')
    ];
    return [bonannoPisano, otherActiveClassicalArchitects];
};
