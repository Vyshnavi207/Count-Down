function startthetimer(datenumber, status) {
  if (status == "noevents") {
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
  } else if (datearray.length != 0 && !status) {
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
  } else if (datearray.length === 0) {
    let div = document.createElement("div");
    div.innerText = "STAY TUNED FOR MORE EVENTS !!!";
    div.id = "no-events-id";
    div.style.color = "#fff";
    div.style.marginTop = "90px";
    div.style.fontSize = "larger";
    div.style.paddingLeft = "10px";
    let timerbox = document.querySelector(".timer");
    timerbox.appendChild(div);
  }
}
