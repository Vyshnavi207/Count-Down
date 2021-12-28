window.addEventListener("wheel", function () {
	const navbar = this.document.querySelector("nav")
	const scrollTopDoc = this.document.documentElement.scrollTop
	const scrollTopBody = this.document.body.scrollTop

	if (scrollTopDoc > 5 || scrollTopBody > 5) {
		navbar.style.position = "fixed"
	} else {
		navbar.style.position = ""
	}
})