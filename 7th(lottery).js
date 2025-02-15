function lottery(arr) {
    const randomPick = Math.floor(Math.random() * arr.length);
    return arr[randomPick];
}
const arr = [
    "Asif",
    "Sabuz",
    "Rohan",
    "Muzahid",
    "Nandi",
    "Nakib",
    "Rezuan",
    "Alom",
];
const result = lottery(arr);
console.log(result);
