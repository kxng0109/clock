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
const analogClockMarkings = document.querySelectorAll('.analog-clock--markings');
const translateX = 'translateX(-50%)'
let date = new Date();
let is12HToggled;
let addZero = time => time <= 9 ? `0${time}` : time;

const hourConverter = (hour, digitalOrAnalog = 'digital') =>{
	switch (true) {
		case digitalOrAnalog == 'digital' && digitalClockHoursFormat.textContent === 'PM':
			return digitalClockHours.textContent = hour == 12 ? hour : (hour - 12);
		break;
		case digitalOrAnalog == 'digital' && digitalClockHoursFormat.textContent === 'AM':
			return digitalClockHours.textContent = hour;
		case digitalOrAnalog == 'analog':
			return hour > 12 ? hour - 12 : hour;
		break;
	}
}

const localStorageSetter = (trueElement, falseElement) =>{
	localStorage.setItem(trueElement, 1);
	localStorage.removeItem(falseElement);
}

let toggler = (changeElement, otherElement) =>{
	changeElement.classList.add('selected');
	otherElement.classList.remove('selected');
}

const getColors = () =>{
	switch (true) {
		case date.getHours() >= 20 || date.getHours() < 5:
			container.style.background = '#03071E';
			document.documentElement.classList.add('dark');
			document.querySelector("meta[name='theme-color']").content = "#03071E";
		break;
		case date.getHours() >= 5 && date.getHours() < 6:
			container.style.background = 'linear-gradient(135deg, #03071E,#303236)';
			document.querySelector("meta[name='theme-color']").content = "#03071E";
			document.documentElement.classList.add('dark');
		break;
		case date.getHours() >= 6 && date.getHours() < 7:
			container.style.background = 'linear-gradient(135deg, #444850 , #573170)';
			document.querySelector("meta[name='theme-color']").content = "#444850";
			document.documentElement.classList.add('dark');
		break;
		case date.getHours() >= 7 && date.getHours() < 8:
			container.style.background = 'linear-gradient(135deg, #804565 , #AA585B)';
			document.querySelector("meta[name='theme-color']").content = "#804565";
			document.documentElement.classList.add('dark');
		break;
		case date.getHours()  >= 8 && date.getHours() < 9:
			container.style.background = 'linear-gradient(135deg, #D36C50 , #FD8046)';
			document.querySelector("meta[name='theme-color']").content = "#D36C50";
			document.documentElement.classList.add('dark');
			analogClockMinute.style.background = '#4C2E05';
			analogClockHours.style.background = '#7A8450';
		break;
		case date.getHours()  >= 9 && date.getHours() < 10:
			container.style.background = 'linear-gradient(135deg, #D36C50 , #FD8046)';
			document.querySelector("meta[name='theme-color']").content = "#D36C50";
			document.documentElement.classList.add('dark');
			analogClockMinute.style.background = '#4C2E05';
			analogClockHours.style.background = '#7A8450';
			analogClockMarkings.forEach((element, index) => analogClockMarkings[index].style.background = 'rgb(29 78 216)');
		break;
		case date.getHours()  >= 10 && date.getHours() < 11:
			container.style.background = 'linear-gradient(135deg,#FD8046, rgb(254 240 138))';
			document.querySelector("meta[name='theme-color']").content = "#FD8046";
			document.documentElement.classList.remove('dark');
			analogClockMinute.style.background = '#4C2E05';
			analogClockHours.style.background = '#7A8450';
			analogClockMarkings.forEach((element, index) => analogClockMarkings[index].style.background = 'rgb(29 78 216)');
		break;
		case date.getHours()  >= 11 && date.getHours() < 12:
			container.style.background = 'linear-gradient(135deg, rgb(254 240 138), rgb(254 252 232))';
			document.querySelector("meta[name='theme-color']").content = "rgb(254 240 138";
			document.documentElement.classList.remove('dark');
		break;
		case date.getHours()  >= 12 && date.getHours() < 14:
			container.style.background = 'linear-gradient(110deg, rgb(254 252 232), rgb(254 249 195))';
			document.querySelector("meta[name='theme-color']").content = "rgb(254 252 232)";
			document.documentElement.classList.remove('dark');
		break;
		case date.getHours()  >= 14 && date.getHours() < 16:
			container.style.background = 'linear-gradient(110deg, rgb(254 249 195), #72a0c6)';
			document.querySelector("meta[name='theme-color']").content = "rgb(254 249 195)";
			document.documentElement.classList.remove('dark');
		break;
		case date.getHours()  >= 16 && date.getHours() < 17:
			container.style.background = 'linear-gradient(135deg,  #F48C06, #E85D04)';
			document.querySelector("meta[name='theme-color']").content = "#F48C06";
			document.documentElement.classList.add('dark');
			analogClockMinute.style.background = '#7005e2';
			analogClockHours.style.background = '#05e2d7';
		break;
		case date.getHours()  >= 17 && date.getHours() < 18:
			container.style.background = 'linear-gradient(135deg, #E85D04 , #DC2F02)';
			document.querySelector("meta[name='theme-color']").content = "#E85D04";
			document.documentElement.classList.add('dark');
			analogClockMinute.style.background = '#7005e2';
			analogClockHours.style.background = '#05e2d7';
		break;
		case date.getHours()  >= 18 && date.getHours() < 19:
			container.style.background = 'linear-gradient(135deg, #DC2F02, #6A040F)';
			document.querySelector("meta[name='theme-color']").content = "#DC2F02";
			document.documentElement.classList.add('dark');
		break;
		case date.getHours()  >= 19 && date.getHours() < 20:
			container.style.background = 'linear-gradient(135deg, #6A040F, #370617)';
			document.querySelector("meta[name='theme-color']").content = "#6A040F";
			document.documentElement.classList.add('dark');
		break;
	}
}
getColors();

const theMain = () =>{
	date = new Date();
	digitalClockMinute.textContent = addZero(date.getMinutes());
	digitalClockSecond.textContent = addZero(date.getSeconds());
	digitalClockHoursFormat.textContent = addZero(date.getHours()) >= 12 ? 'PM' : 'AM';
	getColors();

	switch (true) {
		case toggleDigital.classList.contains('selected'):
			localStorageSetter('digital', 'analog');
			switch (true) {
				//If 12 hours is selected and it is afternoon/evening
				case is12HToggled && digitalClockHoursFormat.textContent === 'PM':
					hourConverter(addZero(date.getHours()))
					digitalClockHoursFormat.classList.remove('hidden');
				break;
				//If 12 hours is selected and it is morning
				case is12HToggled && digitalClockHoursFormat.textContent === 'AM':
					hourConverter(addZero(date.getHours()))
					digitalClockHoursFormat.classList.remove('hidden');
				break;
				default:			
					digitalClockHours.textContent = addZero(date.getHours());
					digitalClockHoursFormat.classList.add('hidden');
				break;
			}
		break;

		case toggleAnalog.classList.contains('selected'):
			localStorageSetter('analog', 'digital');
			analogClockSecond.style.transform = `rotate(${addZero(date.getSeconds()) * 6}deg) ${translateX}`;
			analogClockMinute.style.transform = `rotate(${addZero(date.getMinutes()) * 6}deg) ${translateX}`;
			analogClockHours.style.transform = `rotate(${hourConverter(date.getHours()) * 30 + (addZero(date.getMinutes()) * 0.5)}deg) ${translateX}`;
		break;
	}
};

setInterval(() => theMain(), 500)//Not sure whether I should make it 100, but I'm worried about low-tier devices

toggleDigital.onclick = () => {
	toggler(toggleDigital, toggleAnalog);
	hoursFormat.style.display = 'flex';
	digitalClock.style.display = 'flex';
	analogClock.style.display = 'none';
	localStorageSetter('digital', 'analog');
}

toggleAnalog.onclick = () => {
	toggler(toggleAnalog, toggleDigital);
	hoursFormat.style.display = 'none';
	digitalClock.style.display = 'none';
	analogClock.style.display = 'flex';
	localStorageSetter('analog', 'digital');
}

localStorage.getItem('analog') ? toggleAnalog.onclick() : toggleDigital.onclick();

toggleTwelveHours.onclick = () => {
	toggler(toggleTwelveHours, toggleTwentyFour);
	is12HToggled = true;
	localStorageSetter('twelveHour', 'twentyFourHour');
}

toggleTwentyFour.onclick = () => {
	toggler(toggleTwentyFour, toggleTwelveHours);
	is12HToggled = false;
	localStorageSetter('twentyFourHour', 'twelveHour');
}
localStorage.getItem('twentyFourHour') ? toggleTwentyFour.onclick() : toggleTwelveHours.onclick();