let arr = [];
let size = 10;
let max, min;
for (let i = 0; i < size; i++) {
    arr.push(Math.round(Math.random()*100));
}
max = arr[0];
min = arr[0];
for (let i = 0; i < size; i++) {
    max <= arr[i]?max = arr[i]:null;
    min >= arr[i]?min = arr[i]:null;
}
console.log(`max - ${max}`);
console.log(`min - ${min}`);
