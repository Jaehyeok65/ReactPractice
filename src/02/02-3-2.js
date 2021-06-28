var objectOne = {one : 1, two : 2, other : 0};
var objectTwo = {three : 3, four : 4, other : -1};
var combined = {
    ...objectTwo,
    ...objectOne,
};
var {other, ...others} = combined;
console.log(others);