let titlediv = document.querySelector("#eventTitle");
let liveventdiv=document.querySelector('#live')
let upcomingeventsdiv=document.querySelector('#upcoming')
upcomingeventsdiv.style.color='white'
liveventdiv.style.color='black'
 upcomingeventsdiv.style.textShadow='rgb(255, 255, 255) 0px 0px 40px, rgb(255, 255, 255) 0px 0px 80px, rgb(255, 255, 255) 0px 0px 160px, rgb(255, 255, 255) 0px 0px 400px, rgb(255, 255, 255) 0px 0px 500px'
 liveventdiv.style.textShadow='rgb(255, 255, 255) 0px 0px 40px, rgb(255, 255, 255) 0px 0px 80px, rgb(255, 255, 255) 0px 0px 160px, rgb(255, 255, 255) 0px 0px 400px, rgb(255, 255, 255) 0px 0px 500px'
let descriptiondiv = document.querySelector("#eventDescription");
var clock;
let datenumber = 0;
let reqarray = [];
let datearray = [];
let liveventstatus=false
let upcomingeventstatus=true
let livedatenumber=0;
let liveventinfoarray=[]
let eventinfoarray = [];
liveventdiv.addEventListener('click',()=>
{
   upcomingeventsdiv.style.color='black'
 liveventdiv.style.color='white'
  liveventstatus=true
  upcomingeventstatus=false
  livedatenumber=0
  console.log(livedatenumber,liveventinfoarray,'000000')
 
  
  startthetimer(livedatenumber,'live-event')     
})
upcomingeventsdiv.addEventListener('click',()=>
{
   upcomingeventsdiv.style.color='white'
 liveventdiv.style.color='black'
console.log("rught")
liveventstatus=false
upcomingeventstatus=true
datenumber=0


 startthetimer(datenumber)
})
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
  
  
})

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
  eventdata.forEach((event) => {
    if(new Date(
      moment(event["StartDate"], `YYYY-MM-DDhh:mm:ss.sss`).format(
        "MMM D, YYYY HH:mm:ss"
      )
    ).getTime() < new Date().getTime() &&  new Date(
      moment(event["EndDate"], `YYYY-MM-DDhh:mm:ss.sss`).format(
        "MMM D, YYYY HH:mm:ss"
      )
    ).getTime() > new Date().getTime())
    {
      liveventinfoarray.push({
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


// console.log(reqarray,eventinfoarray,liveventinfoarray)
//   reqarray = [
//     "2021-08-20T14:00:00.000Z",
//     "2022-03-30T14:00:00.000Z",
//     "2022-04-20T02:00:00.000Z",
//   ]
//   // reqarray=[]
//   eventinfoarray = reqarray.map((x, index) => {
//     return {
//       title:
//         "default title",
//       description:
//         "default description",
//       enddate:
//         "2022-04-01T07:00:00.000Z",
//     }
//   })
//   datearray = arraydates(reqarray);
  // $(document).ready(startthetimer(datenumber, "backenddown"))
let lefttimer = () => {
  if(upcomingeventstatus)
  {
    if (datearray.length > 0) {
      clock.stop();
      if (datenumber == 0) {
        datenumber = datearray.length - 1;
      } else {
        datenumber = datenumber - 1;
      }
      startthetimer(datenumber);
    }
  }
  if(liveventstatus)
  {
    if(liveventinfoarray.length>0)
    {
      if (livedatenumber == 0) {
        livedatenumber =liveventinfoarray.length - 1;
      } else {
        livedatenumber = livedatenumber - 1;
      }
    }
    startthetimer(livedatenumber,'live-event')
  }
  
};
let righttimer = () => {
  
  if(upcomingeventstatus)
  {
    if (datearray.length > 0) {
      clock.stop();
      if (datenumber == datearray.length - 1) {
        datenumber = 0;
      } else {
        datenumber = datenumber + 1;
      }
      startthetimer(datenumber);
    }
  }
  if(liveventstatus)
  {
    if(liveventinfoarray.length>0)
    {
      if (livedatenumber == liveventinfoarray.length - 1) {
        livedatenumber = 0;
      } else {
        livedatenumber = livedatenumber + 1;
      }
    }
    startthetimer(livedatenumber,'live-event')
  }
 
};
let leftbutton = document.querySelector("#lefttimer");
let rightbutton = document.querySelector("#righttimer");
console.log(liveventinfoarray)
leftbutton.addEventListener("click", lefttimer);
rightbutton.addEventListener("click", righttimer);