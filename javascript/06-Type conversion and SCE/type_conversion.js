var x = 10;

var str1 = x.toString(); // 명시적 타입 변환
console.log(typeof str1, str1); // string 10

var str2 = x + ""; // 암묵적 타입 변환
console.log(typeof str2, str2); // string 10

console.log('--------------------');

console.log(typeof (10 * '10'), 10 * '10');
console.log(typeof ('10' * 10), '10' * 10);

console.log('1' + 2);
console.log('1' + '1');

console.log('--------------------');

if ('') console.log('true');
if ('is true?') console.log('yes. it is true.');
if (1) console.log('true');
if (0) console.log('false');
if (null) console.log('false');
if (undefined) console.log('false');

console.log('--------------------');

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

console.log('--------------------');

//1. Number 생성자 함수 이용.

console.log(typeof '0' , typeof Number('0'));
console.log(typeof '-1' , typeof Number('-1'));
console.log(typeof '3.141592' , typeof Number('3.141592'));

//2. parseInt,parseFloat 함수 이용.

console.log(typeof '0' , typeof parseInt('0'));
console.log(typeof '-1' , typeof parseInt('-1'));
console.log(typeof '3.141592' , parseInt('3.141592') ,typeof parseInt('3.141592'));
console.log(typeof '3.141592' , parseFloat('3.141592') ,typeof parseFloat('3.141592'));
console.log(typeof true , typeof parseInt(true)); // NaN -> 파라미터 값을 문자열로 변환 시키기 때문이다.

//3. + , * 연산자 이용

console.log(typeof '1' , typeof +'1');
console.log(typeof 'number' , typeof +'number');
console.log(typeof '5' * 1 , typeof +('5' * 1)); // * 연산자를 사용하면 문자열이 숫자로 암묵적으로 타입 변환이 일어나기 때문이다.
console.log(typeof '-1' * 1 , typeof +('-1' * 1));

console.log('--------------------');

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

console.log('--------------------');

console.log(1 && "참") // "참"
console.log(0 && "거짓"); // 0
console.log(true || "참"); // true
console.log(false || "거짓"); // "거짓"

console.log(5 && 10); // 10
console.log(0 && 1); // 0

console.log('--------------------');

// Object 
const user = {
  name: "Kim" //name은 프로퍼티이다.
};

console.log(user.name); // "Kim"
console.log(user.age);  // undefined

console.log('--------------------');

var result = null ?? "null 맞음."; 
console.log(result);

var result1 = undefined ?? "undefined 맞음";
console.log(result1);

var result2;

result2 ??= "undefined 맞음요."; // result2 = result2 ?? "undefined 맞음요."
console.log(result2);