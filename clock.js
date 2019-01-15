//update the clock every X seconds (Example: 1 second)
var seconds = 1;
var startAmount = 1412000000000;
var t1 = new Date();
var t2 = new Date(2017, 06, 01, 0, 0, 0, 0);
var dif = t1.getTime() - t2.getTime();

var Seconds_from_T1_to_T2 = dif / 31536000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
currentDebt = startAmount + (Seconds_Between_Dates * 1000);

function numberWithCommas(x) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}
var debtNum = currentDebt.toFixed(2);
document.getElementById("myResults").innerHTML = '$' + numberWithCommas(debtNum);




var getDebt = setInterval(function () {
	var startAmount = 1412000000000;
	var t1 = new Date();
	var t2 = new Date(2017, 06, 01, 0, 0, 0, 0);

	var dif = t1.getTime() - t2.getTime();


	var Seconds_from_T1_to_T2 = dif / 31536000;
	var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
	currentDebt = startAmount + (Seconds_Between_Dates * 1000);

	function numberWithCommas(x) {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}
	var debtNum = currentDebt.toFixed(2);
	document.getElementById("myResults").innerHTML = 'Student Loans (in trillions): $' + numberWithCommas(debtNum);
}, seconds * 1000);