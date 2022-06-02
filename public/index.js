'use strict'

const container = document.querySelector('#container');
const toggleDigital = document.querySelector('#toggle--digital');
const toggleAnalog = document.querySelector('#toggle--analog');
const hoursFormat = document.querySelector('#hours-format');
const toggleTwelveHours = document.querySelector('.toggle--twelve');
const toggleTwentyFour = document.querySelector('.toggle--twentyFour');
const digitalClock = document.querySelector('#digital-clock');
const analogClock = document.querySelector('#analog-clock');
const digitalClockHours = document.querySelector('#digital-clock--hours');
const digitalClockMinute = document.querySelector('#digital-clock--minute');
const digitalClockSecond = document.querySelector('#digital-clock--seconds');
const digitalClockHoursFormat = document.querySelector('#digital-clock--hours-format');
const analogClockHours = document.querySelector('#analog-clock--hours');
const analogClockMinute = document.querySelector('#analog-clock--minute');
const analogClockSecond = document.querySelector('#analog-clock--seconds');
const translateX = 'translateX(-50%)'
let date = new Date();
let isToggled = true;
let addZero = time => time <= 9 ? `0${time}` : time;
toggleTwelveHours.onclick = () => isToggled = !isToggled

const hourConverter = (hour, digitalOrAnalog = 'digital') =>{
	switch (true) {
		case digitalOrAnalog == 'digital' && digitalClockHoursFormat.textContent === 'PM':
			return digitalClockHours.textContent = (hour - 12);
		break;
		case digitalOrAnalog == 'digital' && digitalClockHoursFormat.textContent === 'AM':
			return digitalClockHours.textContent = hour;
		case digitalOrAnalog == 'analog':
			return hour > 12 ? hour - 12 : hour;
		break;
	}
}


let toggler = (changeElement, otherElement) =>{
	changeElement.classList.add('selected');
	otherElement.classList.remove('selected');
}

toggleDigital.onclick = () => {
	toggler(toggleDigital, toggleAnalog);
	hoursFormat.style.display = 'flex';
	digitalClock.style.display = 'flex';
	analogClock.style.display = 'none';
}

toggleAnalog.onclick = () => {
	toggler(toggleAnalog, toggleDigital);
	hoursFormat.style.display = 'none';
	digitalClock.style.display = 'none';
	analogClock.style.display = 'flex';
}

toggleTwelveHours.onclick = () => {
	toggler(toggleTwelveHours, toggleTwentyFour);
	isToggled = true;
}

toggleTwentyFour.onclick = () => {
	toggler(toggleTwentyFour, toggleTwelveHours);
	isToggled = false;
}

// const themeSelector = value =>{	
// 	switch(true){
// 		case digitalClockHours.textContent >= value:
// 			// document.documentElement.classList.add('dark');
// 			// container.classList.remove('evening');
// 			document.documentElement.classList.remove('dark');
// 			container.classList.remove('evening');
// 		break;

// 		// case digitalClockHours.textContent <= value:
// 		// 	document.documentElement.classList.remove('dark');
// 		// 	container.classList.add('evening');
// 		// break;
// 	}
// }

setInterval(() =>{
	date = new Date();
	digitalClockMinute.textContent = addZero(date.getMinutes());
	digitalClockSecond.textContent = addZero(date.getSeconds());
	digitalClockHoursFormat.textContent = addZero(date.getHours()) >= 12 ? 'PM' : 'AM';

	switch (true) {
		case toggleDigital.classList.contains('selected'):
			switch (true) {
				//If 12 hours is selected and it is afternoon/evening
				case isToggled && digitalClockHoursFormat.textContent === 'PM':
					// digitalClockHours.textContent = (addZero(date.getHours()) - 12);
					hourConverter(addZero(date.getHours()))
					digitalClockHoursFormat.classList.remove('hidden');
					// themeSelector(8)
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
					// themeSelector(20)
				break;
			}
		break;

		case toggleAnalog.classList.contains('selected'):
			analogClockSecond.style.transform = `rotate(${addZero(date.getSeconds()) * 6}deg) ${translateX}`;
			analogClockMinute.style.transform = `rotate(${addZero(date.getMinutes()) * 6}deg) ${translateX}`;
			analogClockHours.style.transform = `rotate(${hourConverter(date.getHours()) * 30 + (addZero(date.getMinutes()) * 0.5)}deg) ${translateX}`;
		break;
	}
}, 1000)
// let temp = 20;

// switch (true) {
// 	case temp >= 20:
// 		container.classList.add('dark:bg-black');
// 		break;
// 	case temp >= 3 && temp < 6:
// 		container.classList.add('dark:from-black', 'dark:to-indigo-900');
// 		container.classList.remove('dark:bg-black');
// 	break;
// 	case temp >= 6 && temp < 7:
// 		container.classList.add('dark:from-indigo-900', 'dark:to-blue-700');
// 		container.classList.remove('dark:from-black', 'dark:to-indigo-900');
// 	break;
// 	case temp >= 7 && temp < 8:
// 		container.classList.add('dark:from-blue-700', 'dark:to-orange-500');
// 		container.classList.remove('dark:from-blue-900', 'dark:to-blue-700');
// 	break;
// 	case temp >= 8 && temp < 9:
// 		container.classList.add('from-orange-500', 'to-yellow-400');
// 		container.classList.remove('dark:from-blue-500', 'dark:to-orange-500');
// 	break;
// 	case temp >= 9 && temp < 11:
// 		container.classList.add('from-yellow-400', 'to-yellow-100');
// 		container.classList.remove('dark:from-blue-500', 'dark:to-yellow-400');
// 	break;
// 	case temp >= 11 && temp < 16:
// 		container.classList.add('from-yellow-100', 'to-blue-300');
// 		container.classList.remove('from-yellow-500', 'to-yellow-100');
// 	break;
// }

let temp = 7;
switch (true) {
	case temp >= 20:
	container.style.background = '#03071E';
	document.documentElement.classList.add('dark');
	break;
	case temp >= 5 && temp < 6:
	container.style.background = 'linear-gradient(135deg, #03071E,#303236)';
	document.documentElement.classList.add('dark');
	break;
	case temp >= 6 && temp < 7:
	container.style.background = 'linear-gradient(135deg, #444850 , #573170)';
	document.documentElement.classList.add('dark');
	break;
	case temp >= 7 && temp < 8:
	container.style.background = 'linear-gradient(135deg, #804565 , #AA585B)';
	document.documentElement.classList.add('dark');
	analogClockMinute.style.background = '#4C2E05';
	analogClockHours.style.background = '#7A8450';
	break;
	case temp  >= 8 && temp < 9:
	container.style.background = 'linear-gradient(135deg, #D36C50 , #FD8046)';
	document.documentElement.classList.add('dark');
	break;
	case temp  >= 9 && temp < 10:
	container.style.background = 'linear-gradient(135deg, #D36C50 , #FD8046)';
	document.documentElement.classList.add('dark');
	break;
	case temp  >= 10 && temp < 11:
	container.style.background = 'linear-gradient(135deg,#FD8046, rgb(254 240 138))';
	document.documentElement.classList.remove('dark');
	break;
	case temp  >= 11 && temp < 12:
	container.style.background = 'linear-gradient(135deg, rgb(254 240 138), rgb(254 252 232))';
	document.documentElement.classList.remove('dark');
	break;
	case temp  >= 12 && temp < 14:
	container.style.background = 'linear-gradient(110deg, rgb(254 252 232), rgb(254 249 195))';
	document.documentElement.classList.remove('dark');
	break;
	case temp  >= 14 && temp < 16:
	container.style.background = 'linear-gradient(110deg, rgb(254 249 195), #72a0c6)';
	document.documentElement.classList.remove('dark');
	break;
	case temp  >= 16 && temp < 17:
	container.style.background = 'linear-gradient(135deg,  #F48C06, #E85D04)';
	document.documentElement.classList.add('dark');
	break;
	case temp  >= 17 && temp < 18:
	container.style.background = 'linear-gradient(135deg, #E85D04 , #DC2F02)';
	document.documentElement.classList.add('dark');
	break;
	case temp  >= 18 && temp < 19:
	container.style.background = 'linear-gradient(135deg, #DC2F02, #6A040F)';
	document.documentElement.classList.add('dark');
	break;
	case temp  >= 19 && temp < 20:
	container.style.background = 'linear-gradient(135deg, #6A040F, #370617)';
	document.documentElement.classList.add('dark');
	break;
}