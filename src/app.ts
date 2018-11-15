/*******************   ARROW FUNCTIONS ********************************

const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName: function() {
        console.log(this.name);
    },
};

console.log(pizza.getName()); 
*/

/************************** DEFAULT FUNCTION PARAMETERS  *************************/

// function multiply(a, b = 4) {
//     return a * b;
// }

// console.log(multiply(3));
// console.log(multiply(3, 12));

/***************************** OBJECT LITERALS *************************************/

// const pizza = {
//     name: 'Pepperoni',
//     price: 15
// };

// const toppings = ['pepperoni'];

// function createOrder(pizza, toppings) {
//     return {pizza, toppings};
// }

// console.log(createOrder(pizza, toppings));

/********************************* REST PARAMETERS  ****************************/

function sumAll(message, ...arr) {
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(sum);