const API_KEY = 'VlZp4I5GzKzpX%2Fg48MVMtTKiBZl8MKAuhBwlVrzA%2FfKPibeIgue%2BxHA3K4%2Be2U%2F6vJ9958sBTgamtMeiYN5T%2Bg%3D%3D';
function success(position) {
  let crd = position.coords; 
  const currentLat = crd.latitude;
  const currentLong = crd.longitude;
  const nFrame = findXY(currentLat, currentLong);
  GetWeather(nFrame);
}
function error() {
  alert('Sorry, no position available.');
}
const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000
};

function GetWeather(_n) {
  let requestURL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";  
  let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + API_KEY;
  queryParams += '&' + encodeURIComponent('numofRows') + '=' + encodeURIComponent('10');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
  queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(_base.date); 
  queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(_base.time);
  queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(String(_n.x)); 
  queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(String(_n.y));
  const headers = new Headers({
    'Content-Type': '*',
  });
  console.log(requestURL + queryParams);
  const responseWeather = fetch((requestURL + queryParams), {
    method: 'post',
    headers: {
      "Content-type" : "application/json"
    },body: JSON.stringify({
      dataType: 'text json'
    }),
  })
  .then(function (resp){return resp.json})
  .then(function (data){console.log('JSON REQUEST SUCCESS'), data})
  .catch(function (error){console.log("FAILED", error)});
}

/*
cord 오류 

*/


navigator.geolocation.getCurrentPosition(success, error, options);

function FloatFix(_F) {
  return parseFloat(_F.toFixed(7));
}

//활용문 알고리즘 격자 X, Y를 가져오는 알고리즘이다.
function findXY (_currentLat, _currentLong){
  const PI = FloatFix( Math.PI);
  const DEGRAD = FloatFix( PI/180.0);
  const RADDEG = FloatFix( 180.0/PI);

  let Re = FloatFix( 6371.00877); // 지도반경
  let grid = FloatFix( 5.0); // 격자간격 (km)
  let slat1 = FloatFix( 30.0); // 표준위도 1
  let slat2 = FloatFix( 60.0); // 표준위도 2
  let olon = FloatFix( 126.0); // 기준점 경도
  let olat = FloatFix( 38.0); // 기준점 위도
  let xo = FloatFix( 210/grid); // 기준점 X좌표
  let yo = FloatFix( 675/grid); // 기준점 Y좌표
  let re = FloatFix( Re/grid);
  slat1 = FloatFix( slat1 * DEGRAD);
  slat2 = FloatFix( slat2 * DEGRAD);
  olon = FloatFix( olon * DEGRAD);
  olat = FloatFix( olat * DEGRAD);

  let sn = FloatFix( Math.tan(PI*0.25 + slat2*0.5)/Math.tan(PI*0.25 + slat1*0.5));
  sn = FloatFix( Math.log(Math.cos(slat1)/Math.cos(slat2))/Math.log(sn));
  let sf = FloatFix( Math.tan(PI*0.25 + slat1*0.5));
  sf = FloatFix( Math.pow(sf,sn)*Math.cos(slat1)/sn);
  let ro = FloatFix( Math.tan(PI*0.25 + olat*0.5));
  ro = FloatFix( re*sf/Math.pow(ro,sn));
  let raParameter = FloatFix( PI * 0.25 + (_currentLat) * DEGRAD * 0.5);
  let ra = FloatFix( Math.tan(raParameter));
  ra = FloatFix( re*sf/Math.pow(ra,sn));
  let theta = FloatFix( _currentLong*DEGRAD - olon);
  if (theta > PI) {theta -= FloatFix( 2.0*PI)};
  if (theta < -PI) {theta += FloatFix( 2.0*PI)};
  theta = FloatFix( sn * theta);
  let x = Math.ceil(FloatFix( (ra*Math.sin(theta)) + xo));
  let y = Math.ceil(FloatFix( (ro - ra*Math.cos(theta)) + yo));
  return { x, y};
}

/*
TMP : 기온 C
SKY = [
  {code : 0, cloud : "맑음"},
  {code : 1, cloud : "구름 조금"},
  {code : 2, cloud : "구름"},
  {code : 3, cloud : "구름 많음"},
  {code : 4, cloud : "흐림"}
]: 하늘 상태
VEC : 풍향 deg
WSD : 풍속 m/s
PTY = 
[
  {code : 0, rain : "없음"},
  {code : 1, rain : "비"},
  {code : 2, rain : "비와 눈"},
  {code : 3, rain : "눈"},
  {code : 4, rain : "소나기"}
]: 강수 
*/