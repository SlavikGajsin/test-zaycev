let str = "level";
let strObject = {};
str.split("").reduce((part, i) => part[i] = {}, strObject);
console.log(strObject);