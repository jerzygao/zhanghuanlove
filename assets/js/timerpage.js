$(function() {
    // 2019-12-2
    const meetDate=new Date();
    meetDate.setFullYear(2019,11,2);
    meetDate.setHours(21);
    meetDate.setMinutes(36);
    meetDate.setSeconds(0);
    meetDate.setMilliseconds(0);

    // 2020-1-2
    const loveDate=new Date();
    loveDate.setFullYear(2020,0,2);
    loveDate.setHours(0);
    loveDate.setMinutes(0);
    loveDate.setSeconds(0);
    loveDate.setMilliseconds(0);

    const millisInDay = 1000*60*60*24;

    let now  = new Date();
	let todayText = now.toLocaleDateString()+'<br />'
        +"是我们";

	let meetDays =parseInt((now.getTime()-meetDate.getTime())/(millisInDay) +1);
    let loveDays =parseInt((now.getTime()-loveDate.getTime())/(millisInDay) +1);
    let inLoveText = "相爱第 "+loveDays+" 天";
    let meetText = "相识第 "+meetDays+" 天";

    $("#todayText").html(todayText);
    $("#inLoveText").html(inLoveText);
    $("#meetText").html(meetText);

    // timeElapse(meetDate,"相识了",$("#meetTimeText"));
    // timeElapse(loveDate,"相爱了",$("#inLoveTimeText"));
    setInterval(function () {
        timeElapse(meetDate,"我们已经相识了 ",$("#meetTimeText"));
        timeElapse(loveDate,"我们已经相爱了 ",$("#inLoveTimeText"));
    }, 500);


});

function timeElapse(date,msg,showArea){
    var current = new Date();

    var seconds = (current.getTime() - date.getTime()) / 1000;

    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var result = ""+msg + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    showArea.html(result);
}