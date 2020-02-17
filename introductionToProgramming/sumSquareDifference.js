// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом 
// суммы и суммой квадратов первых n натуральных чисел.

// my solution ===============================
// BEGIN (write your solution here) (write your solution here)

function sumSquareDifference(num) {
    function sumSquare(num) {
        if (num == 1) {
            return (num ** 2);
        }
        return (num ** 2) + sumSquare(num - 1);
    }

    function mySum(num) {
        if (num == 1) {
            return num;
        }
        return num + mySum(num - 1);
    }

    function squareSum(num) {
        let res = mySum(num);
        return res ** 2;
    }


    sumSquare = sumSquare(num);
    squareSum = squareSum(num);
    return Math.abs(sumSquare - squareSum);
}
// END

export default sumSquareDifference;
// my solution ===============================

// hexlet solution ===============================
// BEGIN (write your solution here)
const sumOfSquares = (n) => {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i * i;
        i += 1;
    }

    return sum;
};

const squareOfSum = (n) => {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i += 1;
    }

    return sum * sum;
};

const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquares(n);
// END

export default sumSquareDifference;
// hexlet solution ===============================