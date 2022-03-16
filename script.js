//ShowTime function to get time
function showTime(){

    //Variable declaration for hours, minutes, seconds and session.
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM"

    //If Function to 
    if(h == 0){
        h = 12
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;

    setTimeout(showTime, 20);

}

function showDate(){

    let date = new Date();
    let day = date.getDate();
    let mo = date.getMonth() + 1;
    let jahr = date.getFullYear();

    let datum = day + "." + mo + "." + jahr;

    document.getElementById("MyDate").innerHTML = datum;
    document.getElementById("MyDate").innerText = datum;

    setTimeout(showDate, 3000)

}


showTime();
showDate();
