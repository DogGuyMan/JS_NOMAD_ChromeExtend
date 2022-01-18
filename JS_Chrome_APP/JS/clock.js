const clockElement = document.querySelector("h2.clock");
const reserAPI = [0, 210, 510, 810, 1110, 1410, 1710, 2010, 2310, 2400];
//년월일, 시간분초 계산

function getYMD(_date) {
    const YMD =
        String(_date.getFullYear()).padStart(4,"0") +
        String(_date.getMonth() + 1).padStart(2,"0") +
        String(_date.getDate()).padStart(2,"0"); //baseDate
    return YMD;
}

function calClock(){
    const date = new Date();
    const YMD = getYMD(date);
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    return {YMD ,hours, minutes, second};
}

//weather.js에서 사용할것 
    /*예보시간*/
function calBaseData() {
    const currentTime = calClock();
    const TimeToInt = parseInt(currentTime.hours + currentTime.minutes);

    for(let i = 0 ; i < reserAPI.length -1; i++){
        if(reserAPI[i] <= TimeToInt && TimeToInt < reserAPI[i +1]){
            if(i == 0){
                const yasterday = new Date((new Date()).valueOf() - 1000*60*60*24);
                return {date : getYMD(yasterday), time : "2300"};
            }
            else {
                return {date : currentTime.YMD , time : String(reserAPI[i] - 10)};
            }
        }
    }
}
const _base = calBaseData();
console.log(_base.date, _base.time);

function getClock(){
    const currentTime = calClock();
    clockElement.innerText = `${currentTime.hours}:${currentTime.minutes}:${currentTime.second}`;
}
setInterval(getClock, 1000);

