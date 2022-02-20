<style>
time.date {
  color : #fff;
}
.imgOption{
    display:flex;
    justify-content:center;
    align-items:center;
    width: 800px; 
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


### 할수있는 동작
보관, 가져오기, 삭제(ALL), key반환, 개수

# localStorge
1. 쿠키와 다르게 네트워크 전송이 없다.
2. 쿠키보다 많은 자료를 보관할 수 있다.

**Key - Value 형식**으로 MAP 자료구조와 비슷함
1. 키와 값은 반드시 문자열이 되어야한다.
   1. 배열로 저장해도 대열 [] 싸그리 문자열로된다.

```JS
localstorage.setItem(key, value) // 키-값 저장
localstorage.getItem(key) //키에 해당하는값 가져오기
localstorage.removeItem(key) //키와 키해당하는 값 둘다 삭제
localstorage.clear() //localstorage 전부 비우기
localstorage.key(index) //인덱스에 해당하는 키 가져오기
localstorage.length // 저장항목 개수 
```