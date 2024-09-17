function reverseString(str) {
    return str.split("").reverse().join("");
}

let inputStr = "Hello, World!";
let reversedStr = reverseString(inputStr);

console.log("Chuỗi đảo ngược: " + reversedStr);