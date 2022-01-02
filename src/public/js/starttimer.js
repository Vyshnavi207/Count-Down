function startthetimer(datenumber, status) {
 
    if (status == "noevents") {
      let div = document.createElement("div");
      div.innerText = "NO EVENTS FOR NOW";
      div.id = "no-events-id";
      
      div.style.color="#fff"
      div.style.marginTop="90px"
      div.style.fontSize='larger'
      div.style.paddingLeft='10px'

      let timerbox = document.querySelector(".timer");
      timerbox.appendChild(div);
    }
    if (status == "backenddown") {
      let div = document.createElement("div");
      div.innerText = "BACKEND DOWN SERVER ERROR";
      div.id = "no-events-id";
      div.style.color="#fff"
      div.style.marginTop="90px"
      div.style.fontSize='larger'
      div.style.paddingLeft='10px'

      // color:#fff;
      // margin-top: 90px;
      // font-size: larger;
      // padding-left: 10px;
      let timerbox = document.querySelector(".timer");
      timerbox.appendChild(div);
    }
    
   if(datearray.length!=0 && !status) {
   
    var currentDate = new Date();
    var futureDate = new Date(datearray[datenumber]);
    var difference = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    titlediv.innerHTML = eventinfoarray[datenumber]["title"];
    descriptiondiv.innerHTML = eventinfoarray[datenumber]["description"];
    
    clock = $(".clock").FlipClock(difference, {
      clockFace: "DailyCounter",
      countdown: true,
    });
  }
}
