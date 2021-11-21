function startthetimer (datenumber){
  
  var currentDate = new Date();
 //let array= arraydates(reqarray)
  var futureDate = new Date(datearray[datenumber]);
console.log('date number ' , datearray[datenumber])
  var difference = futureDate.getTime() /1000 - currentDate.getTime() /1000;
  
  console.log(currentDate);
  console.log(futureDate);
  if(futureDate.getTime()<currentDate.getTime())
  {
 
  let div = document.createElement('div')
  div.innerText="NO EVENTS FOR NOW"
  div.id='no-events-id'
  let timerbox=document.querySelector('.timer')
  timerbox.appendChild(div)
  
  }
  else
  {
  
    titlediv.innerHTML=eventinfoarray[datenumber]['title']
    descriptiondiv.innerHTML=eventinfoarray[datenumber]['description']
      clock = $('.clock').FlipClock(difference,{
      clockFace: 'DailyCounter',
      countdown: true
  });
  
  }
 
}