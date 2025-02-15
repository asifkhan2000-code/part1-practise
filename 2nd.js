function numberRepeated(numbers, findNumber) {
    let count = 0;
    for (const num of numbers) {
        if (num === findNumber) {
            count++;
        }
    }
    return count;
}
const numbers = [5, 6, 11, 12, 98, 5, 5, 5, 5];
const findNumber = 25;
const result = numberRepeated(numbers, findNumber);
console.log("numbers =", numbers);
console.log("find:", findNumber);
console.log(`The number ${findNumber} occurs ${result} times.`);
