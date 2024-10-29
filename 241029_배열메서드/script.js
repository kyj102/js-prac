const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. arr의 모든 값 출력
arr.forEach(element => console.log(element));

// 2. arr 두배인 배열 만들어서 arr1이라는 변수에 넣기
const arr1 = arr.map(x => x * 2);
console.log(arr1);

// 3. arr에서 짝수만 arr2라는 변수에 넣기
const arr2 = arr.filter(num => num % 2 === 0);
console.log(arr2);

// 4. arr2에서 5보다 큰 숫자 중 첫번째 값만 출력하기
const arr3 = arr.find(num => num > 5);
console.log(arr3);

// 5. arr 오름차순 출력
const arr4 = arr.sort(function(a, b) {return a - b});
console.log(arr4);

// 6. arr 내림차순 출력
const arr5 = arr.sort(function(a, b) {return b - a});
console.log(arr5);

// 7. arr 값 모두 더하기
const arr6 = arr.reduce((a, b) => (a+b));
console.log(arr6)


