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
        enddate:
            event["EndDate"].length > 350
              ? event["EndDate"].slice(0, 350) + " ..."
              : event["EndDate"],
      });
    }
  })
  datearray = arraydates(reqarray);
  $(document).ready(startthetimer(datenumber));
} else {
  startthetimer(datenumber, "noevents");
}
  reqarray = [
    "2021-08-20T14:00:00.000Z",
    "2022-03-30T14:00:00.000Z",
    "2022-04-20T02:00:00.000Z",
  ]
  // reqarray=[]
  eventinfoarray = reqarray.map((x, index) => {
    return {
      title:
        "default title",
      description:
        "default description",
      enddate:
        "2022-04-01T07:00:00.000Z",
    }
  })
  datearray = arraydates(reqarray);
  $(document).ready(startthetimer(datenumber, "backenddown"))
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
