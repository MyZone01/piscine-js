const filterEntries = (obj, callback) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => callback([key, value])));

const mapEntries = (obj, callback) => Object.fromEntries(Object.entries(obj).map(callback));

const reduceEntries = (obj, callback, acc) => (acc == undefined) ? Object.entries(obj).reduce(callback) : Object.entries(obj).reduce(callback, acc)

const totalCalories = (cart) => Number(reduceEntries(cart, ((accumulator, [key, value]) => (accumulator + (nutritionDB[key].calories * value) / 100)), 0).toFixed(1))

const lowCarbs = (cart) => filterEntries(cart, ([key, value]) => (nutritionDB[key].carbs * value / 100) < 50)

const cartTotal = (cart) => mapEntries(cart, ([key, value]) => [key, Object.entries(nutritionDB[key]).reduce((acc, [k, val]) => { acc[k] = parseFloat(((val * value) / 100).toFixed(3)); return acc; }, {})])

const nutritionDB = {
    tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
    vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
    oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
    onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
    garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
    sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
    orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 9, fiber: 0.2, fat: 0.1 },
}

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
console.log('Total cart nutritional facts:')
console.log(cartTotal(groceriesCart))