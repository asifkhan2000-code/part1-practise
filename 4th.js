function isAllVowelsPresent(str) {
    const vowels = "aeiou";
    str = str.toLowerCase();
    for (const vowel of vowels) {
        if (!str.includes(vowel)) {
            return false;
        }
    }
    return true;
}
const sentence = "I enjoy unique audio!";
const result = isAllVowelsPresent(sentence);
console.log(result);
