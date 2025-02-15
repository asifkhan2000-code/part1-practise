function longestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const str = "I am learning Programming to become a programmer";
const result = longestWord(str);
console.log(result);
