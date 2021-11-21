let arraydates=(dates)=>
{
    let array=[]
    console.log('dates  ',dates)
    for(let i=0;i<dates.length;i++)
    {
       // let isodate=moment(dates[i],`YYYY-MM-DDTHH:mm:ss.sssZ`).toISOString()
      //  console.log("iso ,,  ",moment(isodate,`YYYY-MM-DDThh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss'))
  //      console.log(sorter(moment(dates[i],`YYYY-MM-DDTHH:mm:ss.sssZ`).format('MMM D, YYYY HH:mm:ss')))
    //   array.push(moment(dates[i],`YYYY-MM-DDTHH:mm:ss.sssZ`).format('MMM D, YYYY HH:mm:ss'))
array.push(moment(dates[i],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss'))
    }
console.log('array items ---  ',array)

    return [...array]
}

