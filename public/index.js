'use strict'

const container = document.querySelector('#container');
const toggleDigital = document.querySelector('#toggle--digital');
const toggleAnalog = document.querySelector('#toggle--analog');
const hoursFormat = document.querySelector('#hours-format');
const toggleTwelveHours = document.querySelector('.toggle--twelve');
const toggleTwentyFour = document.querySelector('.toggle--twentyFour');
const digitalClockHours = document.querySelector('#digital-clock--hours');
const digitalClockMinute = document.querySelector('#digital-clock--minute');
const digitalClockSecond = document.querySelector('#digital-clock--seconds');
const digitalClockHoursFormat = document.querySelector('#digital-clock--hours-format');
let date = new Date();
let isToggled = true;
let addZero = time => time <= 9 ? `0${time}` : time;
toggleTwelveHours.onclick = () => isToggled = !isToggled

let toggler = (changeElement, otherElement) =>{
	changeElement.classList.add('selected');
	otherElement.classList.remove('selected');
}

toggleDigital.onclick = () => {
	toggler(toggleDigital, toggleAnalog);
	hoursFormat.style.display = 'flex';
}

toggleAnalog.onclick = () => {
	toggler(toggleAnalog, toggleDigital);
	hoursFormat.style.display = 'none';
}

toggleTwelveHours.onclick = () => {
	toggler(toggleTwelveHours, toggleTwentyFour);
	isToggled = true;
}

toggleTwentyFour.onclick = () => {
	toggler(toggleTwentyFour, toggleTwelveHours);
	isToggled = false;
}

const themeSelector = value =>{	
	switch(true){
		case digitalClockHours.textContent >= value:
			// document.documentElement.classList.add('dark');
			// container.classList.remove('evening');
			document.documentElement.classList.remove('dark');
			container.classList.remove('evening');
		break;

		// case digitalClockHours.textContent <= value:
		// 	document.documentElement.classList.remove('dark');
		// 	container.classList.add('evening');
		// break;
	}
}

setInterval(() =>{
	date = new Date();
	digitalClockMinute.textContent = addZero(date.getMinutes());
	digitalClockSecond.textContent = addZero(date.getSeconds());
	digitalClockHoursFormat.textContent = addZero(date.getHours()) >= 12 ? 'PM' : 'AM';
	switch (true) {
		//If 12 hours is selected and it is afternoon/evening
		case isToggled && digitalClockHoursFormat.textContent === 'PM':
			digitalClockHours.textContent = (addZero(date.getHours()) - 12);
			digitalClockHoursFormat.classList.remove('hidden');
			themeSelector(8)
		break;
		//If 12 hours is selected and it is morning
		case isToggled && digitalClockHoursFormat.textContent === 'AM':			
			digitalClockHours.textContent = addZero(date.getHours());
			digitalClockHoursFormat.classList.remove('hidden');
			document.documentElement.classList.remove('dark');
		break;
		default:			
			digitalClockHours.textContent = addZero(date.getHours());
			digitalClockHoursFormat.classList.add('hidden');
			themeSelector(20)
		break;
	}
}, 1000)
let temp = 8;

switch (true) {
	case temp >= 20:
		container.classList.add('dark:bg-black');
		break;
	case temp >= 3 && temp < 6:
		container.classList.add('dark:from-black', 'dark:to-indigo-900');
		container.classList.remove('dark:bg-black');
	break;
	case temp >= 6 && temp < 7:
		container.classList.add('dark:from-indigo-900', 'dark:to-blue-700');
		container.classList.remove('dark:from-black', 'dark:to-indigo-900');
	break;
	case temp >= 7 && temp < 8:
		container.classList.add('dark:from-blue-700', 'dark:to-orange-500');
		container.classList.remove('dark:from-blue-900', 'dark:to-blue-700');
	break;
	case temp >= 8 && temp < 9:
		container.classList.add('from-orange-500', 'to-yellow-400');
		container.classList.remove('dark:from-blue-500', 'dark:to-orange-500');
	break;
	case temp >= 9 && temp < 11:
		container.classList.add('from-yellow-400', 'to-yellow-100');
		container.classList.remove('dark:from-blue-500', 'dark:to-yellow-400');
	break;
	case temp >= 11 && temp < 16:
		container.classList.add('from-yellow-100', 'to-blue-300');
		container.classList.remove('from-yellow-500', 'to-yellow-100');
	break;
}