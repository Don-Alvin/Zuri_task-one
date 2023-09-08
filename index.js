const date = new Date();
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let currentDay = days[date.getDay()];
let hours = addZero(date.getUTCHours());
let minutes = addZero(date.getUTCMinutes());
let seconds = addZero(date.getUTCSeconds());

let currentUTCTime = `${hours}:${minutes}:${seconds}`;

function addZero(num) {
	return num < 10 ? `0${num}` : num;
}

const dayElement = document.getElementById("day");
const currentTimeElement = document.getElementById("time");

dayElement.innerText = currentDay;
currentTimeElement.innerText = currentUTCTime;
