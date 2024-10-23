
document.write("<table>");

document.write("<tr>") 
  for(let i = 2; i <= 9; i++) {
  document.write(`<th>${i}단</th>`)
} document.write("</tr>");

document.write("<tr>")
for(let i = 1; i <= 9; i++) {
  for (let j = 2; j <= 9; j++) {
    document.write(`<td width=80px>${j} x ${i} = ${i * j}</td>`)
  } document.write("</tr>")
} 
document.write("</table>");


// const gugudan = document.querySelector("#gugudan");
// for (let i = 0; i <= 9; i++) {
//   const tr = document.createElement("tr");
//   for (let j = 2; j <= 9; j++) {
//     const td = document.createElement("td");
//     td.innerText = i === 0 ? `${j}단` : `${j} * ${i} = ${i * j}`;
//     tr.appendChild(td);
//   }
//   gugudan.appendChild(tr);
// }