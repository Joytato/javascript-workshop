// Create an array of fruits and use forEach to print each fruit.

const fruits = ['Banana', 'strawberry', 'grape', 'apple', 'orange', 'watermelon', 'blueberry', 'lemon', 'peach', 'avocado', 'pineapple', 'cherry', 'cantaloupe', 'raspberry', 'pear', 'lime', 'blackberry', 'clementine', 'mango', 'plum'];
let i=1;

fruits.forEach(fruit => {
  console.log(i++ +". " + fruit);
});