let a = 20;
let b = 22;
let c = 19;
let d = 30;
let result;
result = b >= c || c < d || b <= d;
console.log(result);

result = a < b || b > c || a > d;
console.log(result);

result = a > d || b < c || a > d;
console.log(result);

result = b >= c && c < d && b <= d;
console.log(result);

result = a < b && b > c && a > d;
console.log(result);

result = a > d && b < c && a > d;
console.log(result);

result = (--a > c && a < b) || (++c > a && d > c);
console.log(result);

result = (--b > c++ || d <= 40) && a > b;
console.log(result);

d -= 10;
result = ++a >= d && b <= c && c < d;
console.log(result);