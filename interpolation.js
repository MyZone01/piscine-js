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
    if (step <= 1) {
        callback([0, start]);
        return;
    }

    const interval = duration / step;
    const distanceDelta = (end - start) / (step - 1);

    let pointIndex = 0;
    const intervalId = setInterval(() => {
        if (pointIndex >= step) {
            clearInterval(intervalId);
            return;
        }

        const distance = start + pointIndex * distanceDelta;
        const point = [distance, start + pointIndex * distanceDelta];

        callback(point);
        pointIndex++;
    }, interval);
}
