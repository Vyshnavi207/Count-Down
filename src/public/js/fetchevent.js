
console.log("fwetch event working")
let titlediv = document.querySelector('#eventTitle')
        let descriptiondiv = document.querySelector('#eventDescription')
        var clock;
        let datenumber=0;
        let reqarray=[]
        let datearray=[]
        let eventinfoarray=[]
        console.log(eventdata)
     
           if(eventdata.length>0)
           {
                eventdata.forEach((event)=>
                {
                  if(new Date(moment(event['StartDate'],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss')).getTime() > new Date().getTime())
                  {
                      reqarray.push(event['StartDate'])
                  }
                })
                eventdata.forEach((event)=>
                {
      			if(new Date(moment(event['StartDate'],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss')).getTime() > new Date().getTime())
                  {//450
      			eventinfoarray.push({
                        title: event['EventName'].slice(0,40)+" ...",
                        description: event['Description'].slice(0,350)+" ..."
      			  })
      			}
                })
                datearray= arraydates(reqarray)
                $(document).ready(
                startthetimer(datenumber)
      		  )}
           else
           {
            startthetimer(datenumber,'noevents')   
           }
      
     
     
        // axios.get('http://localhost:3000/api/events/').then(result=>
        // {
        //     console.log(result)
        //      if(result.data.length>0)
        //      {
        //           result.data.forEach((event)=>
        //           {
        //             if(new Date(moment(event['StartDate'],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss')).getTime() > new Date().getTime())
        //             {
        //                 reqarray.push(event['StartDate'])
        //             }
        //           })
        //           result.data.forEach((event)=>
        //           {
		// 			if(new Date(moment(event['StartDate'],`YYYY-MM-DDhh:mm:ss.sss`).format('MMM D, YYYY HH:mm:ss')).getTime() > new Date().getTime())
        //             {//450
		// 			eventinfoarray.push({
        //                   title: event['EventName'].slice(0,40)+" ...",
        //                   description: event['Description'].slice(0,350)+" ..."
		// 			  })
		// 			}
        //           })
        //           datearray= arraydates(reqarray)
        //           $(document).ready(
        //           startthetimer(datenumber)
		// 		  )}
        //      else
        //      {
        //       startthetimer(datenumber,'noevents')   
        //      }
        // }).catch(e=>
        // {
        //     reqarray=['2021-12-30T14:00:00.000Z','2024-04-01T07:00:00.000Z','2023-04-01T02:00:00.000Z']
		// 	// reqarray=[]
        //     eventinfoarray=reqarray.map((x,index)=>
        //     {
        //       return {
        //             title:'default title loremmmmmmmmmmmmmmmm ',
        //             description: 'default description loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'
        //             }
        //     })
        //     datearray=arraydates(reqarray)
        //     $(document).ready(
        //     startthetimer(datenumber,'backenddown')
        // )
        // })
        let lefttimer=()=>
        {
            if(datearray.length>0)
            {
                clock.stop()
            if(datenumber==0 )
            {
                datenumber=datearray.length-1
            }
            else
            {  
                console.log("not empty ")
                datenumber=datenumber-1
            }
            startthetimer(datenumber)
        }}
        let righttimer=()=>
        {
            console.log("rught")
            if(datearray.length>0)
            {
                clock.stop()
            if(datenumber==datearray.length-1)
            {
          datenumber=0
            }
            else
            {    
              datenumber=datenumber+1
               
            }
            startthetimer(datenumber)
        }
        }
        let leftbutton = document.querySelector('#lefttimer')
        let rightbutton = document.querySelector('#righttimer')

        leftbutton.addEventListener('click',lefttimer)
        rightbutton.addEventListener('click',righttimer)