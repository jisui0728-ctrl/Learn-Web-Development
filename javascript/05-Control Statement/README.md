# 제어문 개요

> `제어문(control flow statement` 은 조건에 따라 `코드 블록` 을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다.

- 제어문은 코드의 실행 흐름을 인위적으로 제어할 수 있다. → 순자적으로 진행하는 직관적인 코드의 흐름을 혼란스럽게 만든다.
- 즉, 제어문은 코드의 흐름을 이해하기 어렵게 만들어 `가독성을 해치는 단점` 이 있다. → 가독성이 좋지 않은 코드는 `오류를 발생시키는 원인`

```jsx
뒤에 살펴볼
+ forEach()
+ map()
+ filter()
+ reduce()

같은 "고차 함수"를 사용한 "함수형 프로그래밍 기법"에서는 제어문의 사용을 억제하여 복잡성을 해결하려고 노력한다.
```

<br>
<br>

# 블록문
> 0개 이상의 문을 중괄호로 묶은것.

```jsx

{
	statement_1;
	statement_2;
	...
	statement_n;
}


//example

{
	console.log("this");
	console.log("is");
	console.log("block statement.");
}
```
# if문

```jsx
if (조건식1) {
	//조건식1이 true이면, 이 코드 블록 실행
} else if (조건식2) {
	//조건식1 false이고 조건식2가 true일 경우
} ...
  else if (조건식n) {
	//조건식 1,2,..,n-1이 false 이고 조건식 n이 true일 경우
} else {
	//모든 조건식이 false 일 경우
}

```
> else if는 최상위 조건(if)이 false인 경우, 다음 조건식으로 판별하여 실행한다.
[else는 모든 조건이 false인 경우 예외적으로 실행함.]

```jsx
var number1 = 10;
var number2 = 10;

var condition_1 = number1 === number2;
var condition_2 = number1 > number2;

if (condition_1) {
    console.log(condition_1); //boolen으로 평가 되기 때문이다.
} else {
    console.log(condition_1);
}

if (condition_2) {
    console.log(condition_2); //boolen으로 평가 되기 때문이다.
} else {
    console.log(condition_2);
}

if (condition_2) {
    console.log("X");
} else if (condition_1) {
    console.log("else if example.");
} else {
    console.log("모든 조건 거짓일 경우 실행.");
}

if (1) {
    console.log("1은 암묵적 타입 변환으로 true로 평가된다.");
} else {
    console.log("무조건 true");
}

if (0) {
    console.log("0은 암묵적 타입 변환으로 false로 평가된다.")
} else {
    console.log("false");
}
```

# switch문

> `swtich 문` 은 주어진 표현식을 평가하여 그 `값과 일치하는 표현식`을 갖는 `case 문` 으로 실행 흐름을 옮긴다.

1.case는 switch문에서 실행을 시작할 위치를 
지정한다. 일치하는 case를 찾으면 그 지점부터
실행한다.
2.default문은 모든 case와 일치 하지 않았을때 마지막으로 실행 할 문이다.
[default문은 제외하여 실행 해도 된다.]
3.break문은 해당 코드 블록을 벗어나 실행을 멈추는 문이다.

```jsx
swtich (표현식) {
	case 표현식1:
		실행문1;
		break;
	case 표현식2:
		실행문2;
		break;
	...
	default:
		default시 실행문;
}
```

```jsx
 // 💡 윤년(leaf year) 판별시 switch 문

var year = 2000;  // 2000년은 윤년 -> 2월은 29일까지
var month = 2;
var days = 0;

swtich (month) {
	case 1: case 3: case 5: case 7: case 8: case 10: case 12:
		days = 31;
		break;
	case 4: case 6: case 9: case 11:
		days = 30;
		break;
	case 2:
		days = ((year % 4 === 0 || year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
		break;
	default:
		console.log("Invaild month");
}
```

> break가 없는 한, 표현식과 일치한 case문 부터 마지막 case, default문 까지 모든 명령문을 수행하는 역할을 하게 된다. 이 현상을 풀스루(full-through)라 한다.
>따라서 해당 되는 case문 까지만 실행하고 싶으면 break를 넣어줘야 switch문을 종료하고 탈출 할 수 있다.

<br>
<br>

# 반복문

```jsx
/**
 * 반복문(loop statement)
 */

/**for문  
 * 
 * for (초기화구문; 조건문; 증감문) {
 *    statement;
 * }
 * 
 * 조건식이 참일동안 statement 문을 반복 실행한다.
*/

for (var i = 1; i <= 10; i++ ) {
    console.log(i);
}

for (var i = 1; i >= 0; i--) {
    console.log(i);
}
//무한 루프
// for (;;) {
//     console.log("this is infinity loop.");
// }

/** --> 초기문,조건문과 증감문 모두 옵션이므로 
반드시 사용 할 필요는 없다.
다만, 정상적인 활용을 위하여 외부에서 반드시 제어와 선언을 해줘야 한다.
*/

//조건식이 없을경우,js엔진에서 true으로 인식한다.

var a = 0;
for (; a !== 10; ) {
    console.log(a);
    a++;
}

// for (var a = 0; a !== 10; a++) {
//     console.log(a);
// }

/**
 * while문
 * 
 * while (조건식) {
 *    statement;
 * }
 * 
 * --> 조건식이 true일때만, statement문을 반복 실행한다.
 */

var number = 0;

while (number < 10) {
    console.log(number);
    number = number + 2;
} // 0 2 4 6 8

//while (1) {
//  console.log("this is infinity loop.");
//}

//1은 불리언 강제 타입 변환 하면 true로 판별되기 때문이다.

var number2 = 0;

while (true) {
    console.log(number2)
    if (number2 === 67) {
        break;
    }
    number2++;
}

/**
 *do while문
 * 
 * do {
 *     statement;
 * } while (조건문);
 * 
 * --> do문을 처음으로 실행한뒤 조건문이 true인 동안
 * 계속 do문을 반복 실행한다.
 * [do문은 최소 1회 이상 실행되어야 한다.]
 */

var number3 = 0;

do {
    number3 += 1;
    console.log(number3);
} while (number3 < 5);

/**
 * break문
 * 
 * label문,반복문,switch문 등 코드 블록을 탈출할때 사용.
 * 
 */

/**label문 
 * 
 * keyword_label: code_block or loop_statement
 * 
 * --> 프로그램 순서를 제어하거나 중첩된 반복 루프에서
 * 전체 루프를 탈출 하고 싶을때 사용한다.
 * 탈출: break keyword_label;
 * 
 * 일반적으로 label문은 프로그램 흐름이 복잡해지고 가독성이 나빠져
 * 일반적으로 사용 권장하지 않는다.
 * 
*/

example_1: {
    console.log("Hello,World!");
    break example_1;
    console.log("Done.");
}

example_2: for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        if (i*j === 54) {
            break example_2; //전체 반복 루프 탈출.
        }
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

/**
 * continue문
 * 
 * 반복문 또는 레이블문의 코드 블록 내에서 현시점 실행을 중단하고 곧 바로
 * 코드 블록 또는 바깥 반복문(처음 반복문)처음 부분부터 다시 실행한다.
 */

i = 0;
n = 0; // 1 + 2 + 4 + 5
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

console.log(n);

checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```
