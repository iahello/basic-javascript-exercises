function displayDate(){
	var comDate = new Date();
	var dayWords = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var dayNum = comDate.getDay();

	console.log(comDate); 
	console.log("Day: " + dayWords[dayNum] + "/n Month: " + comDate.getMonth()); 

}

displayDate();
