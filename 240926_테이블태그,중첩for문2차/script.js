
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