function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate random index
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log("Before shuffle:", myArray);
const shuffledArray = shuffleArray([...myArray]); // Use a copy to preserve the original array
console.log("After shuffle:", shuffledArray);
