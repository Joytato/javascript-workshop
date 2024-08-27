// Create an array of numbers and use map to square each number.

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredArray = numberArray.map(number => {
    return number * number;
});

squaredArray.forEach(element => {
    console.log(element);
});
