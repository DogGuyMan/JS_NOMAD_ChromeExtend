### 단기예보 조회
단기예보 정보 조회를 위해
발표일자 예보 지점 X, Y 좌표로  정보 get

### 요청
JSON으로 작업
* JSON을 가져오기 위해서는, XMLHttpRequest (때론 XHR)로 불리는 API를 사용하면 된다. 
* 이것은 매우 유용한 JavaScript 오브젝트로 JavaScript (e.g. images, text, JSON, even HTML snippets)를 통해 우리가 서버로 부터 다양한 리소스를 가져오는 요청을 만들어 준다.
```js
// 요청 객체 만들기
let request = new XMLHttpRequest();
open을 통해 요청하기
// requestURL은 call Back URL을 사용하면 된다
let requestURL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";  
request.open('GET', requestURL);
```
요청 명세
requestURL을 가지고 요청 메세지 명세를 더 추가가능
```js

//1. Service Key
let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; 

//2. 페이지수 
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/

//3. 페이지 결과수
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/

//4. 응답받을 파일
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/

//5. 날 clock JS 에 작서하자
const curDate = new Date();
baseDateNum = 
    String(curDate.getFullYear()).padStart(4,"0") +
    String(curDate.getMonth() + 1).padStart(2,"0") +
    String(curDate.getDate()).padStart(2,"0");
    
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(baseDateNum); 

/*예보시간*/
/*
시간과 분이 주어진다면
0 0210, 0510, 0810, 1110, 1410, 1710, 2010, 2310, 2400
for(i = 0 ; i <= size-1; i ++){
    if(arr[i] <= curtiem && curtime < arr[i+1]){
        if(i == 0){
            yesterday = new Date((new Date()).valueOf() - 1000*60*60*24);
            curTime = arr[size-1];
        }
        curTime = arr[i];
    }
}
*/
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0500'); /**/


queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
```