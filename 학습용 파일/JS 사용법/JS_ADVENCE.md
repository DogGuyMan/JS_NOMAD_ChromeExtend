## <span style="color : #83dcb7;">1. JS - document 객체 </span>
사실 HTML과 상호작용하기 위해
HTML의 element를 JS를 통해서 변형하고 작동시키려고..

*document*
document는 HTML을 가르키는 객체다

아래는 **console.log & console.dir** 의 내용
[Console에 대한 이야기](./JS_QA_console.md)

![](2022-01-10-15-18-38.png)
![](2022-01-10-15-19-50.png)

아래와같은 방식으로 HTML을 변화시킬수도 있다.
```js
document.MEMVER = ___
```
## <span style="color : #83dcb7;">2. Element Searching </span>

#### 1. getElementById("*IDNAME*")
1. 주어진 *IDNAME* 과 일치하는 id 속성을 찾고 Element 객체를 반환한다.
#### 2. getElementByClassName(*"ClASSNAME"*)
1. array 방식으로 가져온다
#### 3. getElementByTagName("*TAGNAME*")
1. array 방식으로 가져온다

### --- 근데.. 이거의 상위호완이 있다 ---

#### 4. querySelector("*CSS_SELECTOR_WAY*");
1. Css 선택자로 선택가능
2. 단 하나의 Element만 가져옴
#### 5. querySelectorALL("*CSS_SELECTOR_WAY*")