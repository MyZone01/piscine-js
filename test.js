const hello1 = () => {
    myNumber = Math.round(Math.random() * 10);
    setTimeout(() => {
        console.clear();
        console.log(myNumber);
        console.log("Hello Ben");
    }, 1000);
}

const hello2 = () => {
    myNumber = Math.round(Math.random() * 10);
    setTimeout(() => {
        console.clear();
        console.log(myNumber);
        console.log("Hello Luck");
    }, 2000);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        hello1();
        hello2();
    }, i * 2000);
}