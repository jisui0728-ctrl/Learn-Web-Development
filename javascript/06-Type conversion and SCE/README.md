# 6.1 타입 변환

- 개발자가 의도적으로 데이터나 값의 타입을 변환하는 것을 명시적 타입 변환라고 한다.
- 표현식을 평가하는 도중에 js엔진에 의해 암묵적으로 데이터나 값의 타입이 변환되는것을 암묵적 타입 변환라고 한다.

```jsx
var x = 10;

var str1 = x.toString(); // 명시적 타입 변환
console.log(typeof str1, str1); // string 10

var str2 = x + ""; // 암묵적 타입 변환
console.log(typeof str2, str2); // string 10

```

# 6.2 암묵적 타입 변환

> 개발자의 의도가 아닌 js엔진에 의해 평가 결과가 암묵적(강제적)으로 타입 변환되는 현상.

```jsx
console.log('10' + 2); // '102'
console.log(5 * '10'); // 50
console.log(!0); // true

```

## 6.2.1 문자열 암묵적 타입 변환

> 피 연산자가 하나 이상은 문자열 일때 문자열  + 연결 연산자가 만나면 문자열로 타입 변환이 일어남.

```jsx
console.log(1 + '2'); // "12"
console.log('1' + '1'); // "11"

console.log(`1+1 = ${1 + 1}`); // "1+1 = 2"
// 템플릿 리터럴 표현식 평가는 문자열로 암묵적 변환이 일어난다.
```

## 6.2.2 숫자 암묵적 타입 변환

> +가 아닌 산술 연산자나 비교연산자(동등 비교,크기 비교) 등을 사용하면, 문자열 피연산자는 숫자 타입으로 암묵적 변환되어 연산된다.

[단, 숫자 타입으로 평가가 불가능한 경우, NaN이 반환된다.]

```jsx
console.log(1 - '1'); // 0
console.log(1 * '10'); // 10
console.log(1 / 'one') //NaN

console.log('1' > 0); // true

```

## 6.2.3 불리언 암묵적 타입 변환

> 제어문이나 삼항 조건 연산자의 조건식이 불리언 값으로 평가하기 위해 암묵적으로 타입을 변환.

```jsx
if ('') console.log('true');
if ('is true?') console.log('yes. it it true.');
if (1) console.log('true');
if (0) console.log('false');
if (null) console.log('false');
if (undefined) console.log('false');

```

# 6.3 명시적 타입 변환

> 개발자의 의도에 따라 명시적으로 타입을 변환.

## 6.3.1 문자열 명시적 타입 변환

- 1. String 생성자 함수 이용.
- 2. (Object).toString() 매서드 이용.
- 3. + 연결 연산자 이용('') --> 이 방법은 약간의 암묵적 방법이 포함 되어 있음.

```jsx

// 1. String 생성자 함수 이용.

console.log(typeof 5 , typeof String(5));
console.log(typeof NaN , typeof String(NaN));
console.log(typeof Infinity , typeof String(Infinity));
console.log(typeof true , typeof String(true));
console.log(typeof false , typeof String(false));

//2. (Object).toString() 매서드 이용.

console.log(typeof 5 , typeof (5).toString());
console.log(typeof NaN , typeof (NaN).toString());
console.log(typeof Infinity , typeof (Infinity).toString());
console.log(typeof true , typeof (true).toString());
console.log(typeof false , typeof (false).toString());

//3. + 연결 연산자 이용('')

console.log(typeof 5 , typeof (5 + ''));
console.log(typeof NaN , typeof (NaN + ''));
console.log(typeof Infinity , typeof (Infinity + ''));
console.log(typeof true , typeof (true + ''));
console.log(typeof false , typeof (false + ''));

```

## 6.3.2 숫자 명시적 타입 변환

- 1. Number 생성자 함수 이용.
- 2. parseInt,parseFloat 함수 이용. [parseFloat는 소수 첫번째까지 반올림.]
> 문자열에서 숫자로 변환하는 목적 함수 이므로, 파라미터 값이 문자열로 변환 후  숫자로 변환을 시도하는 함수 이기 때문이다.
- 3. + , * 연산자 이용 -> 이 방법은 약간의 암묵적 방법이 포함 되어 있음.

```jsx

//1. Number 생성자 함수 이용.

console.log(typeof '0' , typeof Number('0'));
console.log(typeof '-1' , typeof Number('-1'));
console.log(typeof '3.141592' , typeof Number('3.141592'));

//2. parseInt,parseFloat 함수 이용.

console.log(typeof '0' , typeof parseInt('0'));
console.log(typeof '-1' , typeof parseInt('-1'));
console.log(typeof '3.141592' , typeof parseInt('3.141592')); // 소수점 첫째 짜리 까지 반올림함.
console.log(typeof '3.141592' , typeof parseFloat('3.141592'));
console.log(typeof true , typeof parseInt(true)); // NaN -> 파라미터 값을 문자열로 변환 시키기 때문이다.

//3. + , * 연산자 이용

console.log(typeof '1' , typeof +'1');
console.log(typeof 'number' , typeof +'number');
console.log(typeof '5' * 1 , typeof +('5' * 1)); // * 연산자를 사용하면 문자열이 숫자로 암묵적으로 타입 변환이 일어나기 때문이다.
console.log(typeof '-1' * 1 , typeof +('-1' * 1));

```

## 6.3.3 불리언 타입으로 변환

- 1. Boolean 생성자 함수 이용.
- 2. ! 부정 논리 연산자 두 번 이용.

```jsx

//1. Boolean 생성자 함수 이용.

console.log(typeof 'x', typeof Boolean('x'));
console.log(typeof '' , typeof Boolean(''));
console.log(typeof 0 , typeof Boolean(0));
console.log(typeof 1 , typeof Boolean(1));

//2. ! 부정 논리 연산자 두 번 이용.

console.log(typeof 'x', typeof !!('x'));
console.log(typeof '' , typeof !!(''));
console.log(typeof 0 , typeof !!(0));
console.log(typeof 1 , typeof !!(1));

```

# 6.4 단축 평가(SCE)

## 6.4.1 논리 연산자 단축 평가

- 논리합(||),논리곱(&&) 같은 논리 연산을 진행할때 왼쪽 피 연산자 부터 맨 오른쪽 피 연산자 까지  적용한다. (ex. console.log(a && b) // a 평가 -> b 평가)

> **단축 평가(Short-Circuit Evaluation, SCE)** 란, 왼쪽에서 오른쪽으로 피연산자를 평가하는 과정에서, 현재까지의 평가 결과만으로 전체 논리 연산의 결과가 확정되면 나머지 피연산자를 평가하지 않고 연산을 종료하는 것을 말한다.

```jsx

console.log(false && '실행'); // false

/** 
 * 논리곱(&&) 연산자는 두 피 연산자 모두 다 true여야 true을 반환하는 연산자이다. 피연산자 첫번째 부터 false가 왔으므로, 전체 연산 결과는 false로 확정짓게 되므로 그 다음 피연산자 평가가 필요 없어지므로 연산이 종료되어 단축 평가가 일어난다.
*/

```

--연산 작용 원리--
1. A && B 에서 A가 true이면, B 반환.
2. A && B 에서 A가 false이면, A 반환.
3. A || B 에서 A가 true이면, A 반환.
4. A || B 에서 A가 false이면, B 반환.

```jsx
console.log(1 && "참") // "참"
console.log(0 && "거짓"); // 0
console.log(true || "참"); // true
console.log(false || "거짓"); // "거짓"

console.log(5 && 10); // 10
console.log('' && 1); // ''
```

## 6.4.2 옵셔널 체이닝 연산자(?.)

> 좌황의 피연산자가 null or undefined인 경우 undefined를 반환하고, 아닌 경우 우항의 객체 프로퍼티를 참조한다. [객체 접근을 위한 연산자 이다.]

```jsx

const user = {
  name: "Kim"
};

console.log(user.name); // "Kim"
console.log(user.age);  // undefined

```

--> 자세한 건 07-Object Literal에서 학습.

## 6.4.3 null 병합 연산자(??)

> 좌항의 피연산자가 null or undefined인 경우 우항의 피 연산자를 반환하고, 아닌 경우 좌항의 피 연산자를 반환한다.

>> A ?? B --> A가 null or undefined 이면, B를 반환하고 아닐 경우 A를 반환. 

--> 단축문법으로 (value) ??= "값"; 이런식으로 작성해서 value 변수가 undefined 상태이면 값을 할당시키는 문법도 존재한다.

```jsx
var result = null ?? "null 맞음."; 
console.log(result);

var result1 = undefined ?? "undefined 맞음";
console.log(result1);

var result2;

result2 ??= "undefined 맞음요."; // result2 = result2 ?? "undefined 맞음요."
console.log(result2);

```