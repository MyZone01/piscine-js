const filterEntries = (obj, callback) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => callback([key, value])));

const mapEntries = (obj, callback) => Object.fromEntries(Object.entries(obj).map(callback));

const reduceEntries = (obj, callback, acc) => (acc == undefined) ? Object.entries(obj).reduce(callback) : Object.entries(obj).reduce(callback, acc)

const totalCalories = (cart) => Number(reduceEntries(cart, ((accumulator, [key, value]) => (accumulator + (nutritionDB[key].calories * value) / 100)), 0).toFixed(1))

const lowCarbs = (cart) => filterEntries(cart, ([key, value]) => (nutritionDB[key].carbs * value / 100) < 50)

const cartTotal = (cart) => mapEntries(cart, ([key, value]) => [key, Object.entries(nutritionDB[key]).reduce((acc, [k, val]) => { acc[k] = parseFloat(((val * value) / 100).toFixed(3)); return acc; }, {})])
