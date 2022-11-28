// 추가로 Cat 클래스로 부터 yaongi 객체를 하나 더 만들기(kitty 객체는 두시고). 속성 값들도 임의로 전부 주시고				
// 키티랑 야옹이랑 서열정리		나이를 비교하여	ex.	형님 고양이: 야옹이
// 동생 고양이: 키티
// 둘은 친구임

function Cat(){	
	/* 속성 또는 프로퍼티들 */
	this.name = "";  // 이름
	this.age = 0;    // 나이
	this.weight = 0; // 몸무게
	this.family = "";    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
	this.color = "";     // 털색
    this.crying = "";
}


// 1. Cat 클래스 객체를 생성하기.
new Cat();

// 2. 변수 kitty 를 선언하고 여기에 위의(1번문제의) Cat 클래스 객체 생성문을 넣기(대입하기).
var kitty = new Cat();
var yaongi = new Cat();


// 3.이 클래스형 변수 kitty 가 가진 name 변수에 "야옹이" 를 넣기( "야옹이" 라고 이름 지어주기)
kitty.name = "야옹이";
kitty.age = "11";    // 나이
kitty.weight = "7.2kg"; // 몸무게
kitty.family = "코리안숏헤어";    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
kitty.color = "노랑";
kitty.crying = "야옹";


yaongi.name = "키티";
yaongi.age = "13";    // 나이
yaongi.weight = "5.2kg"; // 몸무게
yaongi.family = "페르시안고양이";    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
yaongi.color = "회색";
yaongi.crying = "미야옹";




// 4.위 고양이 이름을 출력하기
document.write(kitty.crying);
document.write("<br>")

document.write(yaongi.crying);
document.write("<br>")
