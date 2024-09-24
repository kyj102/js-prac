// for문 써서 2단부터 9단까지의 구구단을 화면에 출력해주세요

for (let a = 2; a <= 9; a++) {
  document.write("<br/>");
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} x ${b} = ${a * b} / `);
  }
}