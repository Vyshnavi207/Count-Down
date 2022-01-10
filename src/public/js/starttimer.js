function startthetimer(datenumber, status) {
  console.log(liveventstatus,upcomingeventstatus,liveventinfoarray,eventinfoarray)

  if (status == "live-event" && liveventinfoarray.length>0 && liveventstatus) {
console.log("data man ",liveventinfoarray)
    titlediv.innerHTML = liveventinfoarray[livedatenumber]["title"];
    descriptiondiv.innerHTML = liveventinfoarray[livedatenumber]["description"];

    let clockdiv = document.querySelector('#clock')
    clockdiv.innerHTML=''
   
    // document.getElementById("lefttimer").style.marginTop = "140px";
    // document.getElementById("righttimer").style.marginTop = "140px";
    // document.getElementById("clock").style.display = "none";
    // document.getElementById("live").style.color = "white";
    // document.getElementById("live").style.textShadow = "0 0 40px #fff,0 0 80px #fff,0 0 160px #fff,0 0 400px #fff,0 0 600px #fff";
    // document.getElementById("upcoming").style.color = "black";
    // document.getElementById("upcoming").style.textShadow = "none";
  }
  else if (liveventinfoarray.length==0 && datearray.length==0)
  {
    let clockdiv = document.querySelector('#clock')
    clockdiv.innerHTML=''
    let div = document.createElement("div");
    div.innerText = "NO EVENTS FOR NOW";
    div.id = "no-events-id";
    if(document.querySelector('#no-events-id'))
    {

    }
    else
    {
      let timerbox = document.querySelector(".timer");
      timerbox.appendChild(div);
    
    }
    
  }
  else if (liveventinfoarray.length==0 && liveventstatus) {
    console.log("no events")
    console.log('after-no-l ',liveventstatus)
    let clockdiv = document.querySelector('#clock')
    clockdiv.innerHTML=''
    let div = document.createElement("div");
    div.innerText = "NO EVENTS FOR NOW";
    div.id = "no-events-id";
    titlediv.innerHTML = ''
    descriptiondiv.innerHTML = ''
    // div.style.color = "#fff";
    // div.style.marginTop = "90px";
    // div.style.fontSize = "larger";
    // div.style.paddingLeft = "10px";
    
    if(document.getElementById('no-events-id'))
    {
    
    }
    else
    {
      let timerbox = document.querySelector(".timer");
      timerbox.appendChild(div);
      console.log('come on man ',div)
      // document.getElementById("flashlive").style.display = "block";
      // document.getElementById("flashlive").style.marginTop = "-40px";
      // document.getElementById("lefttimer").style.marginTop = "140px";
      // document.getElementById("righttimer").style.marginTop = "140px";
      // document.getElementById("clock").style.display = "none";
      // document.getElementById("live").style.color = "white";
      // document.getElementById("live").style.textShadow = "0 0 40px #fff,0 0 80px #fff,0 0 160px #fff,0 0 400px #fff,0 0 600px #fff";
      // document.getElementById("upcoming").style.color = "black";
      // document.getElementById("upcoming").style.textShadow = "none";
    
    }
   
  }
  else if (status == "noeventss") {
    console.log("no events")
    let div = document.createElement("div");
    div.innerText = "NO EVENTS FOR NOW";
    div.id = "no-events-id";

    div.style.color = "#fff";
    div.style.marginTop = "90px";
    div.style.fontSize = "larger";
    div.style.paddingLeft = "10px";

    let timerbox = document.querySelector(".timer");
    timerbox.appendChild(div);
  } else if (status == "backenddown") {
    let div = document.createElement("div");
    div.innerText = "BACKEND DOWN SERVER ERROR";
    div.id = "no-events-id";
    div.style.color = "#fff";
    div.style.marginTop = "90px";
    div.style.fontSize = "larger";
    div.style.paddingLeft = "10px";
    let timerbox = document.querySelector(".timer");
    timerbox.appendChild(div);
  } else if (datearray.length != 0 && !status && upcomingeventstatus) {

    document.getElementById("clock").style.display = "block";
    if(document.getElementById('no-events-id'))
    {
      document.getElementById('no-events-id').innerText=''
      document.getElementById('no-events-id').remove()
    }
    document.getElementById("flashlive").style.display = "none";
    document.getElementById("live").style.color = "black";
    document.getElementById("live").style.textShadow = "none";
    document.getElementById("upcoming").style.color = "white";
    document.getElementById("upcoming").style.textShadow = "0 0 40px #fff,0 0 80px #fff,0 0 160px #fff,0 0 400px #fff,0 0 500px #fff";
    var currentDate = new Date();
    var futureDate = new Date(datearray[datenumber]);
    var difference =
      futureDate.getTime() / 1000 - currentDate.getTime() / 1000 > 0
        ? futureDate.getTime() / 1000 - currentDate.getTime() / 1000
        : 0;
    titlediv.innerHTML = eventinfoarray[datenumber]["title"];
    descriptiondiv.innerHTML = eventinfoarray[datenumber]["description"];

    clock = $(".clock").FlipClock(difference, {
      clockFace: "DailyCounter",
      countdown: true,
    });
    // if(difference <= 0){
		// 	document.getElementById("flashlive").style.display = "block";
    //   document.getElementById("flashlive").style.marginTop = "-40px";
    //   document.getElementById("lefttimer").style.marginTop = "140px";
    //   document.getElementById("righttimer").style.marginTop = "140px";
		// 	document.getElementById("clock").style.display = "none";
		// 	document.getElementById("live").style.color = "white";
		// 	document.getElementById("live").style.textShadow = "0 0 40px #fff,0 0 80px #fff,0 0 160px #fff,0 0 400px #fff,0 0 600px #fff";
		// 	document.getElementById("upcoming").style.color = "black";
		// 	document.getElementById("upcoming").style.textShadow = "none";
		// 	console.log(difference+"diff");
		// }else{
		// 	document.getElementById("clock").style.display = "block";
		// 	document.getElementById("flashlive").style.display = "none";
		// 	document.getElementById("live").style.color = "black";
    //   document.getElementById("live").style.textShadow = "none";
    //   document.getElementById("upcoming").style.color = "white";
    //   document.getElementById("upcoming").style.textShadow = "0 0 40px #fff,0 0 80px #fff,0 0 160px #fff,0 0 400px #fff,0 0 500px #fff";
		// } 
  } else if (datearray.length === 0 && upcomingeventstatus) {
    console.log(datearray, " datearray man  ");
    let div = document.createElement("div");
    console.log(div,' buhr come on  ');
    titlediv.innerHTML = ''
    descriptiondiv.innerHTML = 'NO EVENTS FOR NOW STAY TUNED !! '
    div.innerHtml = "STAY TUNED FOR MORE EVENTS !!!";
    div.id = "no-events-id";
    // div.style.color = "#fff";
    // div.style.marginTop = "90px";
    // div.style.fontSize = "larger";
    // div.style.paddingLeft = "10px";
    if(document.getElementById('no-events-id'))
    {

    }
    else
    {
      // document.getElementById("flashlive").style.display = "block";
      // document.getElementById("flashlive").style.marginTop = "-40px";
      // document.getElementById("lefttimer").style.marginTop = "140px";
      // document.getElementById("righttimer").style.marginTop = "140px";
      // document.getElementById("clock").style.display = "none";
      // document.getElementById("live").style.color = "white";
      // document.getElementById("live").style.textShadow = "0 0 40px #fff,0 0 80px #fff,0 0 160px #fff,0 0 400px #fff,0 0 600px #fff";
      // document.getElementById("upcoming").style.color = "black";
      // document.getElementById("upcoming").style.textShadow = "none";
      let timerbox = document.querySelector(".timer");
      timerbox.appendChild(div);
    }
 
  }

}
