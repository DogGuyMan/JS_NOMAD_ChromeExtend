<style>
time.date {
  color : #fff;
}
.imgOption{
    display:flex;
    justify-content:center;
    align-items:center;
    height: 200px; 
}
h2{
    font-weight :bold;
    border : 6px solid #83dcb7;
}
h3 {
    font-weight :bold;
    border : 3px solid ;
}
</style>

## <span style="color : #83dcb7;">1 문자열 합치기 </span>
```js
"abcdef" + "ghijkml"
```

---
## <span style="color : #83dcb7;">2 자료형 </span>
*출력*
```js
console.log("");
```

*상수*
```js
const
```

*var & let 차이*
* ver : 이미 선언된 변수명으로 또 선언 가능 -> 가독성을 떨어뜨린다
    ```js
    ver myname = "hong"; ○
    ver myname = "song"; ○
    ```

* let : 이미 선언돈 변수명으로 다시 선언은 불가능
    ```js
    let myname = "hong"; ○
    let myname = "song"; X
    ```

* not type
  * null : 자연적으로 발생하지 않움 -> 값조차없다는것을 확실하게 명시하기위해 사용 
    * 파이썬에선 none이라고 사용 
  * undefined : 공간이 비어있음 상태
    ```js
    let hello;
    console.log(hello)//이렇게 하면 볼수있음
    ``` 
  * NaN : NOT A NUMBER

---
## <span style="color : #83dcb7;"> 3 Array </span>
*선언*
``` js
_VAR _ARRNAME [,,,]
```
*삽입*
```js
_ARRNAME.push(__) 
```
---
## <span style="color : #83dcb7;"> 4 객체</span>
*선언과 접근*
```js
_VAR _OBJECTNAME = {
  _MEMVAR1 : ___,
  _MEMVAR2 : ___,
  _MEMVAR3 : ___

  _MEMFUNC : function method1 () {

  }
}

_OBJECTNAME._MEMVAR1;
_OBJECTNAME["_MEMVAR1"];
```
*멤버 변수 삽입*
```
_OBJECTNAME.(NONE)DEFVAR = ___
```

---
##<span style="color : #83dcb7;"> 5 함수</span>
*선언*
```js
function func(parameter1, parameter2, ...) {
  return res;
}
```

##<span style="color : #83dcb7;"> 6. 조건문 </span>

*입력*
```js
const age = prompt("출력 문자열"); 
console.log(typeof age) 
>> string
  //prompt로 받은 값은 string 으로 고정 
  // 따라서 형변환이 필요하다
parseInt(string)
  // 정수인지 아닌지 판별
>> NaN
  // 만약 숫자가 왔다면 -> INT 변환
>> INT
```

*조건문*
```js
if (){ }
else if () {}
else { }
```

*판별함수 1 : isNaN*

```js
isNaN(___) // ___가 숫자인지 아닌지..
>> true || false
```

*논리 연산*
```js
&& : and
|| : or
=== : 자료형 까지 같은지?
```