function startthetimer (datenumber){
  var currentDate = new Date();
 let array= arraydates(reqarray)
  var futureDate = new Date(array[datenumber]);
console.log('date number ' , array[datenumber])
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
      clock = $('.clock').FlipClock(difference,{
      clockFace: 'DailyCounter',
      countdown: true
  });
  
  }
 
}