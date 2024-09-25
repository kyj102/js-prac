
// document.write("<tr>");
// for (let a = 2; a <= 9; a++) {
//   document.write(`<td>${a}단</td>`); 
//   for (let b = 1; b <= 9; b++) {
//       document.write(`<td>${a * b}</td>`); 
//     }
//     document.write("</tr>");
//   }

document.write("<table>");
for (let a = 2; a <= 9; a++) {
  document.write("<tr>");
  document.write(`<td width="100px">${a}단</td>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`<td width="100px">${a} x ${b} = ${a * b}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");