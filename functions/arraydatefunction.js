let arraydates=(dates)=>
{
    let array=[]
    let sortedarray=[];
  
    for(let i=0;i<dates.length;i++)
    {
     
array.push(moment(dates[i],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss'))

    }

    sortedarray=bblSort(array)



    return [...array]
}



function bblSort(arr){
     let time1;
     let time2;
    for(var i = 0; i < arr.length; i++){
   
      for(var j = 0; j < ( arr.length - i -1 ); j++){
          
        time1 = new Date(datearray[j]);
        time2 = new Date(datearray[j+1]);
        if(time1> time2){
            
       
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
  
    return arr;
   }
     

