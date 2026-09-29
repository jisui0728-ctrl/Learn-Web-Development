# 1. 산술 연산자

1-1: 이항 산술 연산자

> 덧셈,뺄셈,곱셈,나눗셈,나머지,지수 등

```jsx

console.log(5 + 2); //덧셈
console.log(5 - 2); //뺄셈
console.log(5 * 2); //곱셈
console.log(5 / 2); //나눗셈
console.log(5 % 2); //나머지
console.log(5 ** 2); //지수 --> Math.pow(밑,지수) 메서드를 이용해서 지수를 계산할 수 도 있다.
console.log(Math.pow(2,2)); //2**2 = 4 

console.log(5 - "Hello,World!"); /** NaN(Not a Number) 
--> 산술 연산이 숫자형으로 평가(연산,변환 등)가 되지 않는 경우, 
    즉 값이 유효한 숫자형으로 나타 낼 수 없음.
*/
```

1-2: 단항 산술 연산자

```jsx
//선할당 후증가
result = y1++;
console.log(result,y1); // 2 3

//선증가 후할당
result = ++y1;
console.log(result,y1); // 4 4

//선할당 후감소
result = y2--;
console.log(result,y2); // 2 1

//선감소 후할당
result = --y2;
console.log(result,y2); // 0 0
```
* +,- 단항 연산자 *
>숫자가 아닌 피연산자를 숫자 타입으로 변환을 시도하고 반환함.

```jsx
var a = "1";

//string(숫자형태의 문자열) -> number
console.log(a,+a,typeof a,typeof +a); // "1" 1 string number

//boolean -> number
a = true;
console.log(a,+a,typeof a,typeof +a); // true 1 boolean number

a = false;
console.log(a,+a,typeof a,typeof +a); // false 0 boolean number 

//string(숫자형태가 아닌 문자열) -/> number
a = "Hello,fucking World!";
console.log(+a,typeof a,typeof +a); /**NaN string number 
--> 숫자형태가 아닌 문자열은 숫자로 변환을 못하므로 NaN이 반환한다.
*/

//--> - 단항 연산자는 + 단항 연산자 결과값을 반전시켜 앞에 "-"부호를 붙여서 결과값이 반환된다.

var b = "10";

//string(숫자형태의 문자열) -> number
console.log(b,-b,typeof b,typeof -b); // "10" -10 string number

//boolean -> number
b = true;
console.log(b,-b,typeof b,typeof -b); // true -1 boolean number

b = false;
console.log(b,-b,typeof b,typeof -b); // false 0 boolean number 

//string(숫자형태가 아닌 문자열) -/> number
b = "Hello,fucking World!";
console.log(-b,typeof b,typeof -b); /**NaN string number 
--> 숫자형태가 아닌 문자열은 숫자로 변환을 못하므로 NaN이 반환한다.
*/
```

1-3: + 암묵적 타입변환(= 타입 강제 변환)

> 개발자의 의도와는 상관없이 `자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환되는 현상`

```jsx
// ==== EX ====

// number + string 연산 경우
"1" + 2; // '12'
1 + "2"; // '12'

// boolean + number 연산 경우
1 + true; // 2
1 + false; // 1

// number + null 연산 경우
1 + null; // 1

// number + undefined 연산 경우
1 + undefined; // NaN ( 연산 불가능 )
```

- 이 외에도 자바스크립트 연산을 하다보면, 예측하지 못하고 넘어갈 수 있는 `암묵적 타입변환` 케이스가 많다.

<br>
<br>

# 2. 할당 연산자

> "="연산자는 변수에 값을 할당하는 연산자 이다.

```jsx
var a;
a = "Hello,World!";

console.log(a); //Hello,World!

```

# 3. 비교 연산자

3-1: 동등비교 vs 일치비교

> `동등비교(loose equailty)` 와 `일치비교(strict equality)` 연산자는 엄현히 다르다 !

- `동등비교(loose equailty)`
  - `==`
  - `느슨한 비교` : 좌항과 우항의 피연산자를 비교할 때, `먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후` , `값이 같은지 비교`

```jsx
// EX) 동등비교
5 == 5; // true

// 타입은 number 와 string 으로 다르지만, "암묵적 타입 변환"을 통해 먼저 타입이 일치시키고 비교
5 == "5"; // true
```

- `일치비교(strict equality)`
  - `===`
  - `엄격한 비교` : 좌항과 우항의 피연산자가 `타입도 같고, 값도 같은지 비교` , `즉, 암묵적 타입 변환을 하지 않고 값을 비교`

```jsx
// EX) 일치비교
5 === 5; // true

// 값 & 타입을 비교하기 때문에, 암묵적 타입을 하지 않은 두 값은 같지 않다.
5 === "5"; // false
```

> 💡 이처럼, 동등비교(==) 연산자는 `예측하기 어려운 결과` 를 만들어낸다. 따라서 동등비교 연산자는 사용하지 않는 편이 좋다. 대신 `일치비교(===) 연산자를 사용해라.`

- `크기 비교`
  - >,<,>=,<= 연산자를 통해 두 피연산자의 크기를 비교 할 수 있다.

```jsx
console.log(var1 > var2); // false
console.log(var1 < var2); // true
console.log(var1 >= var2); // false
console.log(var1 <= var2); // true
```

* NaN, +0 & -0, [Object.is](http://Object.is)( ) 함수 *

> 💡 일치 연산자(===)라 해도 `NaN` 에 대해서는 주의할 것

```jsx
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false

// NaN 인지 조사가 필요시 -> 빌트인 함수 "isNaN(value)"을 사용
isNaN(NaN); // true
isNaN(10); // false
isNaN(1 + undefined); // true (1 + undefined 결과는 NaN 이기 때문)
```

> 💡 `+0` 과 `-0` 이 존재한다. 다만 이 둘을 비교하면 `true 를 반환`한다.

```jsx
// 양의 0과 음의 0의 비교, 일치비교/동등비교 모두 결과는 true
0 === -0; // true
0 == -0; // true
```

```jsx
/*
[ 💡 Object.is 메서드 ]

ES6에서 도입된 Object.is 메서드는 "예측 가능한 정확한 비교 결과를 반환한다."
그 외에는 일치 비교 연산자(===)와 동일하게 동작한다.
*/

+0 === -0; // true
Object.is(-0, +0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true
```

<br>
<br>

# 4. 삼항연산자와 조건문

- 조건에 따라 어떤 값을 결정해야 한다. → `삼항 연산자 표현식`을 사용하는 편이 유리
- 조건에 따라 수행해야 할 문이 하나가 아니라 여러개다. → `if ~ else 문` 이 더 가독성 측면에서 유리

> 삼항연산자: (조건식) ? (true일 경우 실행문) : (false 일 경우 실행문)
--> 삼항연산자는 실행문의 결과값을 평가하기에 표현식이다.

```jsx
/*
[ 💡 NOTE - 암묵적 타입 변환으로인한 짝수, 홀수 판별 간단하게 작성법 ]
- 판별식이 0(== false, 암묵적 타입변환)이 되면 거짓일 경우로 판단한다.
*/
let number = 2;
let result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수
```

<br>
<br>

# 5. typeof 연산자

> typeof 연산자는 피연산자의 데이터 타입을 `문자열로 반환` 한다.

- 총 7가지 문자열 형태로 반환
  - `string`
  - `number`
  - `boolean`
  - `undefined`
  - `symbol`
  - `object`
  - `function`

> 💡 `null` 을 반환하는 경우는 없다 !

```jsx
// EX

typeof ""; // "string"
typeof 1; // "number"
typeof NaN; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"
typeof null; // "object" << 🔎
typeof []; // "object"
typeof {}; // "object"
typeof new Date(); // "object"
typeof /test/gi; // "object" << 🔎 ( 정규표현식 )
typeof function () {}; // "function"
```

```jsx
// 💡 null 타입인지 확인할 때는 "일치 연산자(===)" 를 사용할 것
const FOO = null;

typeof FOO === null; // false
FOO === null; // true
```

```jsx
// 💡 선언하지 않은(undeclared) 식별자(= 변수)에 대해서 typeof 연산시, ReferenceError가 아닌 "undefined 를 반환"한다.
typeof undeclared; // undefined
```

<br>
<br>

# 6. 지수연산자

> `ES7` 에서 도입된 지수 연산자

```jsx
2 ** 2; // 4
2 ** 0; // 1
2 ** -2; // 0.25
```

- 지수 연산자 도입되기 이전에는 `Math.pow(x, y)` 메서드를 사용했다.

```jsx
Math.pow(2, 2); // 4
Math.pow(2, 0); // 1
Math.pow(2, -2); // 0.25
```

> `음수를 거듭제곱` 할 때는, 제곱할 수(= 밑)를 `괄호` 로 묶어야 한다.

```jsx
-5 ** 2;  // SyntaxError: Unary operator used immediately before exponentiation expression.
(-5) ** 2;  // 25
```
# 7. null 병합 연산자(??)

-null 병합 연산자
> A ?? B --> A가 null or undefined 이면, B를 반환하고 아닐경우 A를 반환. 

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

# 8. 논리연산자

- 1.AND 연산자(&&) : 조건식 A B 둘 다       true이면, true 반환.
- 2.OR 연산자(||) : 조건식 A B 중 하나 이상 true이면, true 반환.
- 3.NOT 연산자(!) : 조건식 A가 true이면, 부정 연산으로 false 반환.

```jsx
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(6 > 7 && 3 < 4);
console.log(1 == true && 1 !== "1");

console.log(true || false);
console.log(false || false);
console.log(6 > 7 || 3 < 4);
console.log(1 == true && 1 !== "1");

console.log(!true);
console.log(!false);
```
  # 추가 개념 - 단축 평가
  1. A && B 에서 A가 true이면, B 반환.
  2. A && B 에서 A가 false이면, A 반환.
  3. A || B 에서 A가 true이면, A 반환.
  4. A || B 에서 A가 false이면, B 반환.

  --> 06-Type Coercion 에서 자세히 다룸.

  ```jsx
  console.log(1 && "참") // "참"
  console.log(0 && "거짓"); // 0
  console.log(true || "참"); // true
  console.log(false || "거짓"); // "거짓"
  ```

# 9. 비트 연산자

>Js에서 비트 연산을 수행 할땐 32비트 정수 형태로 취급한다. [중요]

1. 비트 AND(a & b) : 두 값의 이진수 각 자리 비트 값을 AND 연산 시킨 결과값.
2. 비트 OR(a | b) : 두 값의 이진수 각 자리 비트 값을 OR 연산 시킨 결과값.
3. 비트 NOT(~ a) : 값의 각 자리 비트값을 NOT 연산 시키고 그 비트를 2의 보수법으로 표현한 결과값.
--> 성질: ~a = -a-1 이 성립한다.
4. 비트 XOR(a ^ b) : 두 값의 이진수 각 자리 비트 값을 XOR 연산 시킨 결과값.
--> XOR 연산자는 A B가 서로 같으면 false, 다르면 true을 반환한다.
5. 왼쪽 시프트 연산자(a<<count) : 값의 이진수 자리를 왼쪽으로 count 만큼 이동하여 나타낸 비트값.
6. 오른쪽 시프트 연산자(a>>count) : 값의 이진수 자리를 오른쪽으로 count 만큼 이동 후 
오른쪽으로 넘치는 비트는 버리고, 왼쪽은 최상위(첫번째 비트값)으로 채워 나타낸 비트값.
7. 부호 없는 오른쪽 시프트 연산자 (a>>>count) : 값의 이진수 자리를 오른쪽으로 count 만큼 이동 후 
오른쪽으로 넘치는 비트는 버리고, 왼쪽은 0으로 채워 양수인 비트로 생성.

  # 추가 개념1 - 10진수 2진수 변환
  
  - 1. 기본 원리: 자리값(위치 기수법)

  숫자 체계는 각 자리가 기수(base)의 거듭제곱을 나타낸다는 원리로 동작합니다.

  10진수: 기수 10 → 자리값이 10⁰, 10¹, 10², ...
  2진수: 기수 2 → 자리값이 2⁰, 2¹, 2², ..., 사용하는 숫자는 0과 1뿐

  10진수 345는 이렇게 해석됩니다.

  345 = 3×10² + 4×10¹ + 5×10⁰ = 300 + 40 + 5

  2진수도 똑같은 방식이며, 기수만 2로 바뀝니다.

  2의 거듭제곱 표 (외워두면 편함)
  지수	2⁷	2⁶	2⁵	2⁴	2³	2²	2¹	2⁰
  값	128	64	32	16	8	4	2	1

  2진수의 가장 오른쪽 자리가 2⁰ (LSB, 최하위 비트), 가장 왼쪽 자리가 MSB(최상위 비트) 입니다.

  - 2. 2진수 → 10진수
  방법: 각 자리의 값 × 자리값을 모두 더한다

  예시 1) 1101₂

  비트	1	1	0	1
  자리값	2³=8	2²=4	2¹=2	2⁰=1
  계산	1×8	1×4	0×2	1×1
  1101₂ = 8 + 4 + 0 + 1 = 13₁₀

  예시 2) 10110₂

  10110₂ = 1×16 + 0×8 + 1×4 + 1×2 + 0×1
        = 16 + 4 + 2
        = 22₁₀
  요령

  1인 자리의 자리값만 골라 더하면 됩니다. 0인 자리는 무시합니다.

  소수 부분이 있는 경우

  소수점 오른쪽은 자리값이 2⁻¹, 2⁻², 2⁻³, ... (= 0.5, 0.25, 0.125, ...) 입니다.

  101.11₂ = 1×4 + 0×2 + 1×1 + 1×0.5 + 1×0.25
          = 4 + 1 + 0.5 + 0.25
          = 5.75₁₀
  
  - 3. 10진수 → 2진수
  방법 A: 2로 계속 나누기 (가장 일반적)
  10진수를 2로 나눠 몫과 나머지를 구한다.
  몫이 0이 될 때까지 몫을 다시 2로 나눈다.
  나머지를 아래에서 위로(마지막 나머지 → 처음 나머지) 읽는다.

  예시) 13₁₀

  계산	몫	나머지
  13 ÷ 2	6	1
  6 ÷ 2	3	0
  3 ÷ 2	1	1
  1 ÷ 2	0	1

  아래에서 위로 읽으면 1101 → 13₁₀ = 1101₂

  왜 이렇게 되는가? 2로 나눈 나머지는 그 수의 가장 낮은 자리 비트입니다. 몫은 그 비트를 떼어낸 나머지 부분이므로, 나눌 때마다 낮은 자리부터 차례로 비트가 결정됩니다. 그래서 나중에 나온 나머지가 더 높은 자리가 됩니다.

  방법 B: 큰 2의 거듭제곱부터 빼기
  주어진 수보다 작거나 같은 가장 큰 2의 거듭제곱을 찾는다.
  그 자리에 1을 쓰고 값을 뺀다.
  남은 수로 반복한다. 쓰이지 않은 자리는 0.

  예시) 45₁₀

  45 - 32(2⁵) = 13  → 2⁵ 자리 = 1
  13 - 16 불가      → 2⁴ 자리 = 0
  13 - 8(2³)  = 5   → 2³ 자리 = 1
  5 - 4(2²)  = 1   → 2² 자리 = 1
  1 - 2 불가       → 2¹ 자리 = 0
  1 - 1(2⁰)  = 0   → 2⁰ 자리 = 1

  → 45₁₀ = 101101₂

  소수 부분이 있는 경우: 2를 계속 곱하기
  소수 부분에 2를 곱한다.
  결과의 정수 부분(0 또는 1)을 기록한다.
  남은 소수 부분으로 반복한다 (0이 되거나 원하는 자리까지).
  기록한 값을 위에서 아래로 읽는다.

  예시) 0.625₁₀

  계산	결과	정수 부분
  0.625 × 2	1.25	1
  0.25 × 2	0.5	0
  0.5 × 2	1.0	1

  → 0.625₁₀ = 0.101₂

  ⚠️ 0.1₁₀ 같은 수는 2진수로 무한 소수(0.000110011...)가 됩니다. 컴퓨터에서 0.1 + 0.2 != 0.3이 되는 부동소수점 오차의 원인입니다.

  4. 검산 방법

  변환 결과를 반대 방향으로 다시 변환해서 원래 값이 나오는지 확인합니다.

  13 → 1101 (변환)
  1101 → 8 + 4 + 0 + 1 = 13 (역변환으로 확인) ✔

  # 추가 개념2 - 1,2의 보수 변
    > 음의 정수를 컴퓨터에서 이진수로 표현하기 위한 변환법.
  
    -9를 32비트로 이진수로 나타낼려면, 절댓값인 9의 이진수를 비트 NOT 연산 시킨다.
    이때 그 값이 1의 보수 변환된 이진수 표현이고, 1을 더한 그 값이 2의 보수 변환된 이진수 표현이다.
    마지막으로 앞에 -부호를 붙여주면 음의 정수를 나타 낼 수 있다. 
      
    >참고로 이진수 맨 앞자리 비트가 0이면 양수, 1이면 음수로 정의하고 있고, js에서는 음의 정수를 32비트인 2의 보수로 표현한다.

    1.값 절댓값의 이진수 비트 NOT 연산 진행.
    2. 1의 보수 변환은 그대로, 2의 보수 변환은 그 이진수에 1을 더함.
    3.부호(-)를 붙여준다. --> 십진수로 나타 낼 때.


```jsx
var bit_and1 = 1; // 0001
var bit_and2 = 2; // 0010

console.log(bit_and1 & bit_and2); // 0000 -> 0

var bit_or1 = 1; // 0001
var bit_or2 = 2; // 0010

console.log(bit_or1 | bit_or2) // 0011 -> 3

var bit_not = 1; //  00000000 00000000 00000000 00000001
console.log(~bit_not); /**  11111111 11111111 11111111 11111110 -> 00000000 00000000 00000000 00000001 + 1 
= 00000000 00000000 00000000 00000010  -> 2 -> -2(-1-1 = -2) */
// 십진수로 다시 변환할때 원래 값인 1의 이진수에 1을 더한 후 앞에 - 부호를 붙여주면 -2가 된다.(00000000 00000000 00000000 00000010)

var bit_xor1 = 1; // 0001
var bit_xor2 = 2; // 0010

console.log(bit_xor1 ^ bit_xor2); // 0011 -> 3 

var bit_left_shift = 1; //0001
console.log(bit_left_shift<<3); // 0001 -> 1000 -> 8

var bit_right_shift = 2; //0010
console.log(bit_right_shift >> 1) // 0001 -> 1
console.log(bit_right_shift >> 2) // 0000 -> 0
console.log(bit_right_shift >> 3) // 0000 -> 0
// shift 할때 버릴 비트 값이 없으면 0으로 처리된다.

console.log(-9>>2); // -3
console.log(-9>>>2); // 1073741821

```