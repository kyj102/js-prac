// 1번 문제 const numbers1 = [1, 2, 3, 4, 5, 6]; 짝수를 추출하는 함수를 만들어주세요
const numbers1 = [1, 2, 3, 4, 5, 6]; 
const evenNum = (numbers1) => {
  return numbers1.filter(x => x % 2 === 0)
};
console.log(evenNum(numbers1));

// 2번 문제 const numbers2 = [3, 5, 7, 2, 8]; 가장 큰 값 추출하는 함수를 만들어주세요
const numbers2 = [3, 5, 7, 2, 8];
function Maxnum(numbers2) {
  return Math.max(...numbers2);
}
console.log(Maxnum(numbers2));