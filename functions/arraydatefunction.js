let arraydates=(dates)=>
{
    let array=[]
    let sortedarray=[];

    
    dates= dates.filter((item)=>
    {
        if(new Date(moment(item,`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss')).getTime() > new Date().getTime())
            {
                console.log(item)
                return item
      
            }
    })
    console.log("dates arrya man ",dates)
    for(let i=0;i<dates.length;i++)
    {
     
    // if(new Date().getTime()<=new Date(tempdate).getTime())
    // {
      array.push(moment(dates[i],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss'))

    // }

    }

    sortedarray=bblSort(array)



    return [...sortedarray]
}



function bblSort(arr){
     let time1;
     let time2;
    for(var i = 0; i < arr.length; i++){
   
      for(var j = 0; j < ( arr.length - i -1 ); j++){
          
        time1 = new Date(datearray[j]);
        time2 = new Date(datearray[j+1]);
        if(time1.getTime()> time2.getTime()){
            
       
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
  
    return arr;
   }
     

