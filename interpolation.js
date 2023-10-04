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
    const totalPoints = step;
    const increment = (end - start) / totalPoints;
    const timeInterval = duration / totalPoints;
    let x = start;
    let currentStep = 1;

    function interpolatePoints() {
        if (currentStep <= totalPoints) {
            const y = callback([parseFloat((x).toFixed(1)), currentStep * timeInterval]);
            x += increment;
            currentStep++;

            setTimeout(interpolatePoints, timeInterval);
        }
    }

    interpolatePoints();
}
