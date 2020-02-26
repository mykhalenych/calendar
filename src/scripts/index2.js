// є


const generateNumber = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
}

// є 
function getMonday(date) {
    // console.log(date);

    const getDate = date.getDate();
    // console.log('getDate = ' + getDate);


    let getDay = date.getDay();

    getDay = isSunday(getDay);

    // console.log('getDay = ' + getDay);

    const getMonday = date.setDate(getDate - getDay + 1);
    // console.log(new Date(getMonday));//wrong

    return new Date(getMonday);
}

const btnAddEvent = document.querySelector('.head-create');
const btnClosePopUp = document.querySelector('.close');
const btnCreateEvent = document.querySelector('.submit');

const popUp = document.querySelector('.modal-form');



function addEvent() {
    popUp.style.display = 'flex';
}

function closePopUp() {
    popUp.style.display = 'none';
}

const formElem = document.querySelector('.form');

function createEvent(event) {
    event.preventDefault();
    const formatData = [...new FormData(formElem)]
        .reduce((events, [field, value]) => ({...events, [field]: value }), {});
    formatData.data = new Date(formatData.data.replace(/-/g, ","));
    console.log(formatData);
    events.push(formatData);
    // console.log(copyEvents);
    console.log(events);
    makeEvent(events)
    closePopUp();
    // popUp.style.display = 'none';
}

btnAddEvent.addEventListener('click', addEvent);
btnClosePopUp.addEventListener('click', closePopUp);
btnCreateEvent.addEventListener('click', createEvent);

const getWeek = date => {
    const newDate = getMonday(date);
    const week = [];
    const oneDay = 86400000;

    for (let i = 0; i <= 6; i++) {
        week.push(newDate.getTime() + oneDay * i);
    }

    const weekUp = week.map(elem => {
            const getDate = new Date(elem).getDate();

            const getMonth = new Date(elem).getMonth();
            const getFullYear = new Date(elem).getFullYear();

            const newDate = new Date(getFullYear, getMonth, getDate).getTime();
            return newDate;
        })
        // console.log(' =');
        // console.log('s = ' + weekUp);


    return weekUp;
}
const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


const dateOfMonthElem = document.querySelector('.date-of-month');

const renderDateOfWeek = () => {
    const numberOfWeek = generateNumber(1, 7)
        .map(dayOfWeek =>
            `<span class="curent-date-of-week"></span>`).join('');

    dateOfMonthElem.innerHTML = numberOfWeek;
}

renderDateOfWeek();

const getCellHoursForDay = () => generateNumber(1, 24)
    .map(hoursDay => `<div class="row-hour" data-hour="${hoursDay}"></div>`).join('');

const renderDayCell = (date) => {
    const currentWeekElem = document.querySelector('.current-week');
    const currentWeek = getWeek(date);
    const CellHourForDay = getCellHoursForDay();
    const dayOfWeek = generateNumber(0, 6)
        .map(day =>
            `<div class="day-by-hours" data-date-of-day="${currentWeek[day]}">
        ${CellHourForDay}
        </div>`).join('');

    currentWeekElem.innerHTML = dayOfWeek;
}

renderDayCell(new Date());

function renderDateForWeek(date) {
    const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');

    const startWeek = getMonday(date);

    startWeek.setDate(new Date(startWeek).getDate() - 1);

    dateOfMondayElem.forEach(elem => elem.innerHTML = startWeek.getDate(startWeek.setDate(startWeek.getDate() + 1)));

}

renderDateForWeek(new Date());

const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');

const daysOfWeek = document.querySelectorAll('.navigation__days');

function addClassCurentDate() {
    let curentDayOfWeek = new Date().getDay();

    curentDayOfWeek = isSunday(curentDayOfWeek);

    dateOfMondayElem[curentDayOfWeek - 1].classList.add('date-today');
    daysOfWeek[curentDayOfWeek - 1].classList.add('day-today');
}
addClassCurentDate();

function removeClassCurentDate() {
    let curentDayOfWeek = new Date().getDay();

    curentDayOfWeek = isSunday(curentDayOfWeek);

    dateOfMondayElem[curentDayOfWeek - 1].classList.remove('date-today');
    daysOfWeek[curentDayOfWeek - 1].classList.remove('day-today');
}

const switchRigth = document.querySelector('.angle-rigth');
const switchRigthSpan = switchRigth.parentNode;

const switchLeft = document.querySelector('.angle-left');
const switchLeftSpan = switchLeft.parentNode;

const dayToday = new Date();
const daysInWeek = 7;

function toNextWeek() {
    const nextWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() + daysInWeek)));

    renderDateForWeek(nextWeekMonday);
    renderDayCell(nextWeekMonday);

    const week = getWeek(nextWeekMonday);
    checkCurentWeek(week);
    getCurrentMonth();
    makeEvent(events);
}

function toPreviosWeek() {
    const PreviosWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() - daysInWeek)));

    renderDateForWeek(PreviosWeekMonday);
    renderDayCell(PreviosWeekMonday);

    const week = getWeek(PreviosWeekMonday);
    checkCurentWeek(week);
    getCurrentMonth();
    makeEvent(events);
}

switchRigthSpan.addEventListener('click', toNextWeek);
switchLeftSpan.addEventListener('click', toPreviosWeek);


function checkCurentWeek(week) {
    const curentDate = new Date();

    if (week[0] < curentDate.getTime() && week[week.length - 1] > curentDate.getTime()) {
        addClassCurentDate();
    } else {
        removeClassCurentDate();
    }
}

const btnCurrentWeek = document.querySelector('.header__today');

function showCurrentWeek() {
    renderDayCell(new Date());
    renderDateForWeek(new Date());
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    getCurrentMonth();
    addClassCurentDate();
    makeEvent(events);

    dayToday.setFullYear(currentYear, currentMonth, currentDate);
}

btnCurrentWeek.addEventListener('click', showCurrentWeek);

function getCurrentMonth() {
    const monthElem = document.querySelector('.header__month');

    const daysOfWeek = document.querySelectorAll('.day-by-hours');

    const firstDayOfWeek = daysOfWeek[0].dataset.dateOfDay;
    const lastDayOfWeek = daysOfWeek[daysOfWeek.length - 1].dataset.dateOfDay;

    const monthForFirstDayOfWeek = new Date(+firstDayOfWeek).getMonth();
    const monthForLastDayOfWeek = new Date(+lastDayOfWeek).getMonth();
    const currentYear = new Date(+firstDayOfWeek).getFullYear();

    if (monthForFirstDayOfWeek !== monthForLastDayOfWeek) {
        monthElem.innerHTML = `${month[monthForFirstDayOfWeek]} - ${month[monthForLastDayOfWeek]} ${currentYear}`;
    } else {
        monthElem.innerHTML = `${month[monthForFirstDayOfWeek]} ${currentYear}`;
    }
}

getCurrentMonth();

function isSunday(numberOfWeek) {
    if (numberOfWeek === 0) return 7;
    return numberOfWeek;
}




function makeEvent(listOfEvent) {

    const days = [...document.querySelectorAll('.day-by-hours')];

    let getStartHour, getStartMinutes;
    let getEndHour, getEndMinutes;

    for (let event of listOfEvent) {

        const thisDays = days.find(elem => event.data.getTime() === +elem.dataset.dateOfDay);

        if (!thisDays) { continue; }
        const thisDay = thisDays.children;

        const thisHoursInThisDay = [...thisDay];
        [getStartHour, getStartMinutes] = event.startEvent.split(':').map(elem => +elem);
        [getEndHour, getEndMinutes] = event.endEvent.split(':').map(elem => +elem);

        console.log(getStartHour, getEndHour);


        if (getStartHour > getEndHour) continue;
        if (getStartHour === getEndHour && getStartMinutes > getEndMinutes) continue;

        thisHoursInThisDay[getStartHour].innerHTML +=
            `<div class='test' style="${styleForEvent()}; background-color: #47d6dc">
      <span>${event.startEvent} - ${event.endEvent}</span>
      <span>${event.nameOfEvent}</span>
    </div>`;
    }

    function styleForEvent() {
        if (getEndHour - getStartHour === 0) {
            return `
        height: ${getEndMinutes - getStartMinutes}px; 
        top: ${getStartMinutes}px`;
        } else if (getEndHour - getStartHour === 1 && getStartMinutes > getEndMinutes) {
            getEndMinutes += 60;
            return `
          height: ${getEndMinutes - getStartMinutes}px; 
          top: ${getStartMinutes}px`
        } else {
            return `
          height: ${60 * (getEndHour - getStartHour) + (getEndMinutes - getStartMinutes)}px; 
          top: ${getStartMinutes}px`

        }
    }
}


makeEvent(events);