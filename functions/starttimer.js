function startthetimer (datenumber){
  console.log("other info ",datenumber, "okay man  ",datearray)
  // var currentDate = new Date();

  // var futureDate = new Date(datearray[datenumber]);

  // var difference = futureDate.getTime() /1000 - currentDate.getTime() /1000;
  
//  console.log('diff bruh ',futureDate.getTime()-currentDate.getTime())
//  console.log('date array ',datearray)

 
  if(datearray.length==0)
  {
 console.log("okay man ")
  let div = document.createElement('div')
  div.innerText="NO EVENTS FOR NOW"
  div.id='no-events-id'
  let timerbox=document.querySelector('.timer')
  timerbox.appendChild(div)
  
  }
  else
  {
    var currentDate = new Date();

    var futureDate = new Date(datearray[datenumber]);
  
    var difference = futureDate.getTime() /1000 - currentDate.getTime() /1000;
    titlediv.innerHTML=eventinfoarray[datenumber]['title']
    descriptiondiv.innerHTML=eventinfoarray[datenumber]['description']
      clock = $('.clock').FlipClock(difference,{
      clockFace: 'DailyCounter',
      countdown: true
  });
  
  }
 
}