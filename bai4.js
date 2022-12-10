// function delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
// }

// function changeTime() {
//     for (let i = 0 ;; i++) {
//         var curSec = new Date().getSeconds();
//         var newCurSec = curSec++;
//         var curTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + newCurSec;
//         document.getElementById("goofy").innerHTML = curTime; newCurSec++
//         console.log(newCurSec);
//     }
// }

// changeTime()

function changeTime2() {
    // var curSec = new Date().getSeconds();
    // var curHrs = new Date().getHours();
    // var curMin = new Date().getMinutes();
    var curSec = new Date().getSeconds(); if (curSec < "10") { curSec = "0" + curSec}
    var curHrs = new Date().getHours(); if (curHrs < "10") { curHrs = "0" + curHrs}
    var curMin = new Date().getMinutes(); if (curMin < "10") { curMin = "0" + curMin}
    var curTime = curHrs + ":" + curMin + ":" + curSec;
    // var curTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds();
    document.getElementById("goofy").innerHTML = curTime;
}