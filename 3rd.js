function vowelCount(str) {
    let count = 0;
    for (const chars of str) {
        if (
            chars === "a" ||
            chars === "e" ||
            chars === "i" ||
            chars === "o" ||
            chars === "u"
        ) {
            count++;
        }
    }
    return count;
}
let str = "I enjoy unique audio!";
str = str.toLowerCase();
const result = vowelCount(str);
console.log(result + " vowels are present in the string");
