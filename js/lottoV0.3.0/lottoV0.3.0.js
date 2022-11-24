function br() {
     document.write("<br>")
}
document.write("오늘의 추첨 번호");
br();


var r1 = Math.floor(Math.random() * 45) + 1;
document.write(r1);
br();

while (true) {
     var r2 = Math.floor(Math.random() * 45) + 1;
     if (r2 != r1) {
          document.write(r2);
          br();
          break;
     }
}

while (true) {
     var r3 = Math.floor(Math.random() * 45) + 1;
     if (r3 != r2 && r3 != r1) {
          document.write(r3);
          br();
          break;
     }
}
while (true) {
     var r4 = Math.floor(Math.random() * 45) + 1;
     if (r4 != r3 && r4 != r2 && r4 != r1) {
          document.write(r4);
          br();
          break;
     }
}

while (true) {
     var r5 = Math.floor(Math.random() * 45) + 1;
     if (r5 != r4 && r5 != r3 && r5 != r2 && r5 != r1) {
          document.write(r5);
          br();
          break;
     }
}

while (true) {
     var r6 = Math.floor(Math.random() * 45) + 1;
     if (r6 != r5 && r6 != r4 && r6 != r3 && r6 != r2 && r6 != r1) {
          document.write(r6);
          br();
          br();
          br();
          break;
     }
}

while (true) {
     var r7 = Math.floor(Math.random() * 45) + 1;
     if (r7 != r6 && r6 != r5 && r6 != r4 && r6 != r3 && r6 != r2 && r6 != r1) 
     {
          document.write("보너스번호는");
          br();
          document.write(r7);
          br();
          break;
     }
}

document.write("입니다");
br();
document.write("------------------");
br();
document.write("사용자가 선택한 번호");


myLotto = [0, 0, 0, 0, 0, 0];
myLotto[0] = 11;
br();
document.write(myLotto[0])
myLotto[1] = 12;
br();
document.write(myLotto[1])
myLotto[2] = 13;
br();
document.write(myLotto[2])
myLotto[3] = 14;
br();
document.write(myLotto[3])
myLotto[4] = 15;
br();
document.write(myLotto[4])
myLotto[5] = 16;
br();
document.write(myLotto[5])

var sum = 0;

if (myLotto[0] == r1 || myLotto[0] == r2 || myLotto[0] == r3 || myLotto[0] == r4 || myLotto[0] == r5 || myLotto[0] == r6) {
     sum = sum + 1;
}
if (myLotto[1] == r1 || myLotto[1] == r2 || myLotto[1] == r3 || myLotto[1] == r4 || myLotto[1] == r5 || myLotto[1] == r6) {
     sum = sum + 1;
}
if (myLotto[2] == r1 || myLotto[2] == r2 || myLotto[2] == r3 || myLotto[2] == r4 || myLotto[2] == r5 || myLotto[2] == r6) {
     sum = sum + 1;
}
if (myLotto[3] == r1 || myLotto[3] == r2 || myLotto[3] == r3 || myLotto[3] == r4 || myLotto[3] == r5 || myLotto[3] == r6) {
     sum = sum + 1;
}
if (myLotto[4] == r1 || myLotto[4] == r2 || myLotto[4] == r3 || myLotto[4] == r4 || myLotto[4] == r5 || myLotto[4] == r6) {
     sum = sum + 1;
}
if (myLotto[5] == r1 || myLotto[5] == r2 || myLotto[5] == r3 || myLotto[5] == r4 || myLotto[5] == r5 || myLotto[5] == r6) {
     sum = sum + 1;

}

br();
document.write("당신의 당첨번호 갯수는 " + sum + "개 입니다");


switch (sum) {
     case 3:

          br();
          document.write("5등입니다");
          br();
          document.write("<img id='size' src='5등.png'>");
          break;

     case 4:
          br();
          document.write("4등입니다");
          br();
          document.write("<img id='size' src='4등.png'>");
          break;

     case 5:
          br();
          
          if(myLotto[0]==r7||myLotto[1]==r7||myLotto[2]==r7||myLotto[3]==r7||myLotto[4]==r7||myLotto[5]==r7){
               document.write("2등입니다");
               br();
               document.write("<img id='size' src='2등.png'>");
          }
          else{
               document.write("3등입니다");
               br();
               document.write("<img id='size' src='3등.png'>");
          }
          
          break;

     case 6:
          br();
          document.write("1등입니다")
          br();
          document.write("<img id='size' src='1등.png'>");
          break;
}


