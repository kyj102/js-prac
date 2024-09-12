// 사용자로부터 이름, 키, 체중을 입력 받은 후 적정 평균 체중을 구합니다. 
// 적정 평균 체중 오차는 플러스, 마이너스 5
// 사용자가 입력한 체중이 적정 체중일 경우에는 'xxx님은 적정 체중입니다.'를 , 아닐 경우에는 'xxx님은 적정 체중이 아닙니다'를 출력해주세요
// result라는 변수에 결과를 삼항연산자로 넣은다음 그걸 alert로 출력!

const name = prompt("이름을 입력해주세요!");
const weight= parseInt(Number(prompt("체중을 입력해주세요! ex.45.2")));
const height= parseInt(Number(prompt("키를 입력해주세요! ex.176.2")));

const avrWeight = (height - 100) * 0.9;

let result = weight >= avrWeight + 5 && weight <= avrWeight -5;

result = result ? `적정체중입니다!` : `적정체중이 아닙니다!`;

alert(`${name}님은 ${result}`);