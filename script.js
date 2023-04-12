// Спільна фунція на валідацію введених даних користувачем до завдання 2 та 3

function validateNamber () {
        do {
            result = prompt('Введіть число');
            namberA = +result;
        } while (+result !== namberA || result === null || result === '');
        return +result;
    }


// task 1

function createStack() {
    let array = [];

    return {
        push: (el) => {
            array.push(el);
            return array;
        },
        pop: () => {
            array.pop()
            return array;
        },
        getStack: () => {
           return console.log(array);
        },
    }
}

const stack = createStack();
stack.push(1);
stack.push(10);
stack.getStack();
stack.pop();
stack.getStack();


// task 2

function isBetween (min, max) {
    return (el) => {
        return el >= min && el <= max;
    }
}

let num1 = validateNamber ();
let num2 = validateNamber ();

let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween(3, 6))
let sortfilterArray = filterArray.sort ((a, b) => {
    return a - b;
})

console.log(sortfilterArray);

// task 3

function mathematicalOperation() {
    do {
        mathOperation = prompt(`Вкажіть математичну дію:
        додавання введіть - '+', 
        віднімання введіть - '-', 
        множення введіть - '*', 
        ділення введіть - '/',
        Перше число в ступені другого числа введіть - pow,`);
    
        } while (mathOperation !== '+' && mathOperation !== '-' && mathOperation !== '*' && mathOperation !== '/' && mathOperation !== 'pow');
    return mathOperation;
}

let operationResult = mathematicalOperation();
let a = validateNamber();
let b = validateNamber();

function  calculate(operation) {
    if (operation === '+') {
        return function (a) {
            return function(b) {
                return a + b;
            }
        }
    } else if (operation === '-') {
        return function (a) {
            return function(b) {
                return a - b;
            }
        }
    } else if (operation === '*') {
        return function (a) {
            return function(b) {
                return a * b;
            }
        }
    } else if (operation === '/') {
        return function (a) {
            return function(b) {
                return a / b;
            }
        }
    } else if (operation === 'pow') {
        return function (a) {
            return function(b) {
                return Math.pow(a, b)
            }
        }
    }
}

console.log(calculate(operationResult)(a)(b));


// task 4

const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
  ]

function sortByField(fieldName, sortType) {
    if (sortType === 'desc') {
        if (fieldName === 'quantity') {
            console.log(products.sort((a, b) => {
                return b['quantity'] - a['quantity'];
            }));
        } else if (fieldName === 'price') {
            console.log(products.sort((a, b) => {
                return b['price'] - a['price'];
            }));
        }
    } else if (sortType === 'asc') {
        if (fieldName === 'quantity') {
            console.log(products.sort((a, b) => {
                return a['quantity'] - b['quantity'];
            }));
        } else if (fieldName === 'price') {
            console.log(products.sort((a, b) => {
                return a['price'] - b['price'];
            }));
        }
    }
  }

  products.sort(sortByField('quantity', 'desc'));
