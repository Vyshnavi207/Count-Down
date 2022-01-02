let titlediv = document.querySelector("#eventTitle");
let descriptiondiv = document.querySelector("#eventDescription");
var clock;
let datenumber = 0;
let reqarray = [];
let datearray = [];
let eventinfoarray = [];

if (eventdata.length > 0) {
  eventdata.forEach((event) => {
    if (
      new Date(
        moment(event["StartDate"], `YYYY-MM-DDhh:mm:ss.sss`).format(
          "MMM D, YYYY HH:mm:ss"
        )
      ).getTime() > new Date().getTime()
    ) {
      reqarray.push(event["StartDate"]);
    }
  });
  eventdata.forEach((event) => {
    if (
      new Date(
        moment(event["StartDate"], `YYYY-MM-DDhh:mm:ss.sss`).format(
          "MMM D, YYYY HH:mm:ss"
        )
      ).getTime() > new Date().getTime()
    ) {
      //450
      eventinfoarray.push({
        title:
          event["EventName"].length >= 40
            ? event["EventName"].slice(0, 40) + " ..."
            : event["EventName"],
        description:
          event["Description"].length >= 350
            ? event["Description"].slice(0, 350) + " ..."
            : event["Description"],
      });
    }
  });
  datearray = arraydates(reqarray);
  $(document).ready(startthetimer(datenumber));
} else {
  startthetimer(datenumber, "noevents");
}
let lefttimer = () => {
  if (datearray.length > 0) {
    clock.stop();
    if (datenumber == 0) {
      datenumber = datearray.length - 1;
    } else {
      datenumber = datenumber - 1;
    }
    startthetimer(datenumber);
  }
};
let righttimer = () => {
  if (datearray.length > 0) {
    clock.stop();
    if (datenumber == datearray.length - 1) {
      datenumber = 0;
    } else {
      datenumber = datenumber + 1;
    }
    startthetimer(datenumber);
  }
};
let leftbutton = document.querySelector("#lefttimer");
let rightbutton = document.querySelector("#righttimer");

leftbutton.addEventListener("click", lefttimer);
rightbutton.addEventListener("click", righttimer);
