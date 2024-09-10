// 사용자에게 점수를 입력받는다
const score =  Number(prompt("점수를 입력하세요 (0~100):"));

    // 점수에 따라 등급을 결정
    let grade;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

  alert(`당신의 등급은 ${grade} 입니다.`);