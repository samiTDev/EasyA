var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var result=0;
var avg=0;

function calculate(){
    a=parseInt(form1.mrk1.value);
    b=parseInt(form1.mrk2.value);
    c=parseInt(form1.mrk3.value);
    d=parseInt(form1.mrk4.value);
    e=parseInt(form1.mrk5.value);
    f=parseInt(form1.mrk6.value);
    g=parseInt(form1.mrk7.value);
    h=parseInt(form1.mrk8.value);
    i=parseInt(form1.mrk9.value);
    j=parseInt(form1.mrk10.value);
    k=parseInt(form1.mrk11.value);
    l=parseInt(form1.mrk12.value);
    m=parseInt(form1.mrk13.value);
    result=a+b+c+d+e+f+g+h+i+j+k+l+m;
    avg=result/13;
   
    var grade ;
    if (avg>= 90){
  grade = 'A'; } 
  else if (avg>= 80){
      grade = 'B';}
      else if (avg>= 70){
          grade ='C';}
  else if(avg>= 60){
      grade = 'D';}
  
  else{
      grade = 'F';}
      var url = "report.html?result=" + result + "&avg=" + avg.toFixed(2) + "&grade=" + grade;
    window.location.href = url;
    var urlParams = new URLSearchParams(window.location.search);
    var result = urlParams.get('result');
    var avg = urlParams.get('avg');
    var grade = urlParams.get('grade');
       
      var table = '<table id="report-card-table">';
table += ' <tr>';
table += '<th class="subject">subject</th>';
table += ' <td class="subject"><b>math</b></td>';
table += ' <td class="subject"><b>chemistry</b></td>';
table += ' <td class="subject"><b>biology</b></td>';
table += ' <td class="subject"><b>history</b></td>';
table += ' <td class="subject"><b>geography</b></td>';
table += ' <td class="subject"><b>physics</b></td>';
table += ' <td class="subject"><b>english</b></td>';
table += ' <td class="subject"><b>amharic</b></td>';
table += ' <td class="subject"><b>affan oromo</b></td>';
table += ' <td class="subject"><b>citizenship</b></td>';
table += ' <td class="subject"><b>P.E</b></td>';
table += ' <td class="subject"><b>economics</b></td>';
table += ' <td class="subject"><b>I.T</b></td>';
table += ' <td class="subject"><b>Total</b></td>';
table += ' <td class="subject"><b>Average</b></td>';
table += ' <td class="subject"><b>Grade</b></td>';
table += '</tr>';
table +='<tr>';
table +='<th>100%</th>'
table +='<td>'+ a +'</td>'
table +='<td>'+ b+ '</td>'
table +='<td>'+ c+ '</td>'
table +='<td>'+ d +'</td>'
table +='<td>'+ e +'</td>'
table +='<td>'+ f +'</td>'
table +='<td>'+ g +'</td>'
table +='<td>'+ h +'</td>'
table +='<td>'+ i +'</td>'
table +='<td>'+ j +'</td>'
table +='<td>'+ k +'</td>'
table +='<td>'+ l +'</td>'
table +='<td>'+ m +'</td>'
table +='<td>'+ result +'</td>'
table +='<td>'+ avg.toFixed(2) +'</td>'
table +='<td>'+ grade+'</td>'
table +='</tr>'
table += '</table>';


    document.getElementById('report-card').innerHTML = table;
  
}
 

