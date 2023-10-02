const filterEntries = (obj, callback) => {
    const filteredObj = {};
    for (let [key, value] of Object.entries(obj)) {
        if (callback([key, value])) {
            filteredObj[key] = obj[key];
        }
    }
    return filteredObj;
}

const mapEntries = (obj, callback) => Object.fromEntries(Object.entries(obj).map(callback));

const reduceEntries = (obj, callback, acc) => (acc == undefined) ? Object.entries(obj).reduce(callback) : Object.entries(obj).reduce(callback, acc)


const totalCalories = (cart) => Number(reduceEntries(cart, ((accumulator, [key, value]) => (accumulator + (nutritionDB[key].calories * value) / 100)), 0).toFixed(1))


const lowCarbs = (cart) => filterEntries(cart, ([key, value]) => (nutritionDB[key].carbs * value / 100) < 50)

const cartTotal = (cart) => mapEntries(cart, ([key, value]) => {
    let result = {};
    for (let [k, val] of Object.entries(nutritionDB[key]))
        result[k] = parseFloat(((val * value) / 100).toFixed(3))
    return [key, result]
})
