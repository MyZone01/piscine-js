/**
 * Generates a series of interpolated points between a start and end value.
 *
 * @param {Object} options - The options for the interpolation.
 * @param {number} options.step - The number of steps in the interpolation.
 * @param {number} options.start - The starting value for the interpolation.
 * @param {number} options.end - The ending value for the interpolation.
 * @param {Function} options.callback - The callback function to be called with each interpolated point.
 * @param {number} options.duration - The duration of the interpolation in milliseconds.
 */
const interpolation = ({ step, start, end, callback, duration }) => {
    const increment = (end - start) / step;
    const timeInterval = duration / step;
    let x = start;
    let currentStep = 1;

    const interpolatePoints = () => setTimeout(() => {
        if (currentStep <= step) {
            const newPoint = [x, currentStep * timeInterval];
            callback(newPoint);
            x += increment;
            currentStep++;
            interpolatePoints();
        }
    }, timeInterval);

    interpolatePoints();
}

// const run = async ({ step, start, end, duration, waitTime = 15 }) => {
//     let arr = []
//     const round = (nbr) => Math.round(nbr * 100) / 100
//     const callback = (el) => { arr.push(Array.isArray(el) ? el.map(round) : round(el)); }
//     interpolation({ step, start, end, callback, duration })
//     await new Promise((s) => setTimeout(s, waitTime))
//     return arr
// }


// async function newFunction() {
//     // testing duration time, forbid loops
//     const { length: length1 } = await run({ step: 5, start: 0, end: 4, duration: 50 });
//     console.log(length1, 1);


//     // testing duration time stamp
//     const { length: length2 } = await run({
//         step: 2,
//         start: 0,
//         end: 4,
//         duration: 10,
//         waitTime: 0,
//     });
//     console.log(length2, 0);


//     // testing the amount of times the callback was called
//     const { length: length3 } = await run({ step: 5, start: 0, end: 1, duration: 10 });
//     console.log(length3, 5);

//     // testing the interpolation points
//     console.log(await run({ step: 5, start: 0, end: 1, duration: 10 }), [
//         [0, 2],
//         [0.2, 4],
//         [0.4, 6],
//         [0.6, 8],
//         [0.8, 10],
//     ]);

//     // testing with different values
//     console.log(await run({ step: 3, start: 1, end: 2, duration: 10 }), [
//         [1, 3.33],
//         [1.33, 6.67],
//         [1.67, 10],
//     ]);

//     // testing with `duration` inferior to `step`
//     console.log(await run({ step: 10, start: 2, end: 6, duration: 4 }), [
//         [2, 0.4],
//         [2.4, 0.8],
//         [2.8, 1.2],
//         [3.2, 1.6],
//         [3.6, 2],
//         [4, 2.4],
//         [4.4, 2.8],
//         [4.8, 3.2],
//         [5.2, 3.6],
//         [5.6, 4],
//     ]);

//     // testing with `start` superior to `end`
//     // inverted straight line
//     console.log(await run({ step: 5, start: 6, end: 2, duration: 6, waitTime: 10 }), [
//         [6, 1.2],
//         [5.2, 2.4],
//         [4.4, 3.6],
//         [3.6, 4.8],
//         [2.8, 6],
//     ]);
// };

// newFunction();
