// 숫자 a와 b를 받고
// alert로 두수를 비교하여 a가 b보다 큽니다를 출력해주세요
// 반드시 삼항조건연산자로 하세요

const a = Number(prompt("숫자를 입력하세요!"));
const b = Number(prompt("숫자를 입력하세요!"));

alert(a > b ? `${a}가 ${b}보다 큽니다!` : `${a}가 ${b}보다 작습니다!`)