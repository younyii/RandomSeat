function makeTable(num, seat) {
  var line1 =  document.getElementById("line1");
  var line2 =  document.getElementById("line2");
  var line3 =  document.getElementById("line3");

  var table1 = "";
  var table2 = "";
  var table3 = "";

  var i = 0;
  var j = 0;

// 필요한 박스의 개수(1박스 == 2자리)
  var a = Math.floor(num / 2);
// 추가로 필요한 자리의 개수 (홀수)
  var b = num % 2;
// 필요한 행의 개수
  var c = Math.floor((a + b) / 3);
// 추가로 필요한 행의 개수
  var d = (a + b) % 3;
//  홀수일 경우, 한자리만 테이블에 표시할때 쓰는 변수 
  var x = 0;
// d가 0인 경우, 테이블 1,2의 i의 index 조절
  var y = 0;


  console.log(a,b,c,d);
  if (d == 0) y = -1;
  if (num >= 7) {
    table1 += "<table>";
    console.log(c);
       for (i = 0; i < c + y + 1; i++) {
         table1 += "<tr>";
           for (j = 0; j < 2; j++) {
             if(i == c + y && b == 1 && d == 1) {
               table1 += "<td> " + seat[2 * i + j] + "</td>";
               x = -1;
               break;
             }
             table1 += "<td>" + seat[2 * i + j] + "</td>";
           }
           table1 += "</tr>";
       }
      table1 += "</table></br>";
      line1.innerHTML = table1;

      table2 += "<table>";
         for (i = c + y + 1; i < 2 * c + d; i++) {
            table2 += "<tr>";
             for (j = 0; j < 2; j++) {
               if(i == 2 * c + d - 1 && b == 1 && d == 2) {
                 table2 += "<td>" + seat[2 * i + j] + "</td>";
                 x = -1;
                 break;
               }
               table2 += "<td>" + seat[2 * i + j + x] + "</td>";
             }
             table2 += "</tr>";
         }
        table2 += "</table></br>";
        line2.innerHTML = table2;

      table3 += "<table>";
         for (i = 2 * c + d; i < a + b; i++) {
            table3 += "<tr>";
             for (j = 0; j < 2; j++) {
               if(i == a + b - 1 && b == 1 && d == 0) {
                 table3 += "<td> " + seat[2 * i + j] + "</td>";
                 x = -1;
                 break;
               }
               table3 += "<td> " + seat[2 * i + j + x] + "</td>";
             }
             table3 += "</tr>";
         }
        table3 += "</table></br>";
        line3.innerHTML = table3;
  }



}
