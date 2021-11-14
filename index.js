const countdown = () =>{
        const countdownDate = new Date('Nov 30, 2021 00:00:00').getTime();
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
        }
}
setInterval(countdown,1000);