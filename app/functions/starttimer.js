function startthetimer(datenumber, status) {
	if (status == "backenddown") {
		let div = document.createElement("div")
		div.innerText = "BACKEND DOWN SERVER ERROR"
		div.id = "no-events-id"
		let timerbox = document.querySelector(".timer")
		timerbox.appendChild(div)
	}
	if (status == "noevents") {
		if (status != "backenddown") {
			let div = document.createElement("div")
			div.innerText = "NO EVENTS FOR NOW"
			div.id = "no-events-id"
			let timerbox = document.querySelector(".timer")
			timerbox.appendChild(div)
		}
	}
	if (datearray.length != 0 && !status) {
		var currentDate = new Date()
		var futureDate = new Date(datearray[datenumber])
		var difference = futureDate.getTime() / 1000 - currentDate.getTime() / 1000
		titlediv.innerHTML = eventinfoarray[datenumber]["title"]
		descriptiondiv.innerHTML = eventinfoarray[datenumber]["description"]
		clock = $(".clock").FlipClock(difference, {
			clockFace: "DailyCounter",
			countdown: true,
		})
	}
}
