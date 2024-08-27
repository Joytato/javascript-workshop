// Create an array of words and use filter to find words with more than 5 letters.

const words = ['Bleak', 'Prick', 'Fiddle', 'Diamond', 'Green', 'Shine', 'Aluminium', 'Wool', 'Luxury', 'Luscious'];

const longWords = words.filter(word => {
    return word.length > 5
});

longWords.forEach(word => {
    console.log(word);
});