function clock() {

    var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    document.querySelectorAll('#hour')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    if (hours > 1 & hours < 11) {
        document.querySelectorAll('#result')[0].innerHTMl = "";
        document.querySelectorAll('#result')[0].innerHTML = "Good morning";
    }
    else if (hours > 11 & hours < 16) {
        document.querySelectorAll('#clock')[0].innerHTMl = "";
        document.querySelectorAll('#result')[0].innerHTML = "Good afternoon";
    }
    else if(hours > 16 & hours < 23) {
        document.querySelectorAll('#result')[0].innerHTMl = "";
        document.querySelectorAll('#result')[0].innerHTML = "Good night";
    }

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}

setInterval(clock, 1000);