'use strict'

const digitalClockHours = document.querySelector('#digital-clock--hours');
const digitalClockMinute = document.querySelector('#digital-clock--minute');
const digitalClockSecond = document.querySelector('#digital-clock--seconds');
const digitalClockHoursFormat = document.querySelector('#digital-clock--hours-format');
const toggleTwelveHours = document.querySelector('.toggle--twelve');
let isToggled = false;

toggleTwelveHours.onclick = () => isToggled = !isToggled
//It remove 0 when the time starts with 0 e.g 05 will become 5, fix it
setInterval(() =>{
	const date = new Date();
	digitalClockHours.textContent = date.getHours();
	digitalClockSecond.textContent = date.getSeconds();
	digitalClockMinute.textContent = date.getMinutes();
	digitalClockHoursFormat.textContent = date.getHours() >= 12 ? 'PM' : 'AM'
	// isToggled ? digitalClockHoursFormat.textContent = 'PM' ? ();
	digitalClockHours.textContent = date.getHours();
}, 1000)