// 하루 지출내역
// 교통비 3000, 식비 6000, 음료비 3000
// 하루 적정지출비용인 1만원을 초과했을 경우
// "000원 초과"라고 출력하고, 아닐경우 "돈관리 잘했어요!"

const car = 3000;
const food = 6000;
const drink = 3000;

const sum = car+food+drink;

let result = sum > 10000 && sum < 10000

result = sum ? `${sum - 10000}원 초과!` : `돈관리 잘했어요!`;
console.log(result)