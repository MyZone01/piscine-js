/**
 * Generate the result object based on the given input data.
 *
 * @param {Array} data - An array of strings representing the input data.
 * @return {Object} result - The generated result object.
 */
const neuron = (data) => {
    const result = {};

    for (const item of data) {
        const [type, content, response] = item.split(': ');
        const [questionOrOrder] = content.split(' - Response');

        const key = questionOrOrder.toLowerCase().replace(/\s/g, '_').replace(/[.,\/#!$%\^&\*;:{}=\-\?`~()]/g, "");
        const responseType = type.toLowerCase();

        if (!result[responseType]) result[responseType] = {};

        if (!result[responseType][key]) {
            result[responseType][key] = {
                [responseType.slice(0, -1)]: questionOrOrder,
                responses: []
            };
        }

        result[responseType][key].responses.push(response);
    }

    return result;
};
