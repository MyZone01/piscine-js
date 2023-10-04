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

    const interpolatePoints = () => {
        if (currentStep <= step) {
            callback([parseFloat((x).toFixed(1)), currentStep * timeInterval]);
            x += increment;
            currentStep++;
            setTimeout(interpolatePoints, timeInterval);
        }
    }

    interpolatePoints();
}

// Example usage:
const interpolationConfig = {
    step: 5,       // Number of steps
    start: 0,      // Start position
    end: 4,       // End position (not included)
    callback: (point) => {
        console.log(point); // Replace this with your desired callback logic
    },
    duration: 50, // Total duration in milliseconds
};

interpolation(interpolationConfig);

