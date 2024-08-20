const a = 10;
const b = 20;
const c = 10;
const f = "20";
let result;

result = a > b;
console.log(result);
result = a < b;
console.log(result);
result = a <= b;
console.log(result);
result = a >= c;
console.log(result);
result = b == f;
console.log(result);
result = a != b;
console.log(result);
result = b === f;
console.log(result);

// a == b : 표기된 숫자만 일치하면 true반환 (숫자형, 문자형 상관없이)
// a !- b : 표기된 숫자만 다르면 true반환 (숫자형, 문자형 상관없이)
// a === b : 반드시 표기된 숫자와 자료형도 일치해야만 true반환
// a !== b : 반드시 표기된 숫자와 자료형이 일치하지 않을때만 true반환