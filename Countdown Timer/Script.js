const daysEl = document.getElementById("days");
const secondsEl = document.getElementById("seconds");










const newYears = "25 Dec 2021";

function countdown () {
	 const newYearsDate = new Date(newYears);
	 const currentDate  = new Date();
    const totalseconds = (newYearsDate-currentDate)/1000;

    
    const days = Math.floor(totalseconds/3600/24);


    const seconds = Math.floor(totalseconds)%60;



   

daysEl.innerHTML = days;
secondsEl.innerHTML = seconds;

	
}



countdown();
setInterval(countdown,1000);

