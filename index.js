const countdown = () =>{
        const countdownDate = new Date('Nov 14, 2021 11:02:00').getTime();
        console.log("count down date ",countdownDate)
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;
        const countDays = Math.floor(distance/days);
        const countHours = Math.floor((distance% days)/hours);
        const countMinutes = Math.floor((distance% hours)/minutes);
        const countSeconds = Math.floor((distance% minutes)/seconds);
        if(countDays <=0){
            document.getElementById("timer-container").style.display = "none";
        }else{
        document.getElementById("days").innerText = countDays;
        document.getElementById("hours").innerText = countHours;
        document.getElementById("minutes").innerText = countMinutes;
        document.getElementById("seconds").innerText = countSeconds;
        if(countDays==0 && countHours==0 && countMinutes==0 && countSeconds==0)
        {
            stopTimer()
        }
        }
}
let stophandler=setInterval(countdown,1000);

let stopTimer=()=>
{
    clearInterval(stophandler)
    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;

}