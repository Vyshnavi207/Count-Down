let arraydates=(dates)=>
{
    let array=[]
    let sortedarray=[];
    
  
    dates= dates.filter((item)=>
    {
        if(new Date(moment(item,`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss')).getTime() > new Date().getTime())
            {
               
                return item
      
            }
    })
   
    for(let i=0;i<dates.length;i++)
    {
     
   
  
      array.push(moment(dates[i],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss'))

   

    }
    array=array.map((item,index)=>
    {
         return {
           date:item,
           title:eventinfoarray[index]['title'],
           description:eventinfoarray[index]['description']
         }
    })

    sortedarray=bblSort(array)

  
    eventinfoarray=sortedarray.map((item)=>
    {
      return {
        title:item['title'],
        description:item['description']
      }
    })
    sortedarray=sortedarray.map((item)=>
    {
      return item['date']
    })
   

    return [...sortedarray]
}



function bblSort(arr){
     let time1;
     let time2;
    for(var i = 0; i < arr.length; i++){
   
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        time1 = new Date(arr[j]['date']);
        time2 = new Date(arr[j+1]['date']);
      
       
        if(time1.getTime()> time2.getTime()){
            
        
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
  
    return arr;
   }
     

