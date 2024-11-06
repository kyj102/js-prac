const numbers = [1, 2, 3, 4, 5];
// 첫번째로 배열의 값을 모두 더 해주는 함수를 만들어보세요 결과는 15
// 두번째로 배열 값을 제곱해주는 함수를 만들어보세요
// 결과는 [1, 4, 9, 16, 25] 나와야해요


// const Addnum = numbers.reduce((a, b) => (a + b));
// console.log(Addnum);
const Addnum = (numbers) => {
  return numbers.reduce((a, b) => (a + b));
}
console.log(Addnum(numbers));


// const squNum = numbers.map(x => x * x);
// console.log(squNum)
const squNum = (numbers) => {
  return numbers.map(x => x * x);
}
console.log(squNum(numbers));