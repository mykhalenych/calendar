// render main

// import { generateNumberRange } from './storage';
// import { renderHourColumns } from './renderMain';
// import { renderColumns } from './renderMain';

//storage
const generateNumberRange = (from, to) => {
        const result = [];

        for (let i = from; i <= to; i++) {
            result.push(i)
        }
        return result;
    }
    //main
const getFields = () => {

    return generateNumberRange(1, 24)
        .map(weekHour => `
                <div 
                    class="multicolumns-column-field" 
                    data-week-hour="${weekHour}">
                </div>`)
        .join('')
}

const renderColumns = () => {
    const columnElem = document.querySelector('.multicolumns');

    const linesString = getFields()

    const sectorsString = generateNumberRange(1, 7)
        .map(columnWeek => `
                <div 
                    class="multicolumns-column" 
                    data-week-number="${columnWeek}">
                ${linesString}</div>`)
        .join('')

    // if (myEvent) {
    //     generateNumberRange(1, 7).map(columnWeek => `
    //         <div 
    //             class="multicolumns-column" 
    //             data-week-number="${columnWeek}"><div class="myEvent">${events}</div>
    //         </div>`)
    //         .join('')
    // }
    // makeEvent();
    columnElem.innerHTML = sectorsString;
}

const getHoursFields = () => {

    return generateNumberRange(1, 12)
        .map(hourFieldNumber => `
                <div 
                    class="columnHour-field" 
                    data-field-number="${hourFieldNumber}">
    
    
                </div>`)
        .join('')
}

const renderHourColumns = () => {
    const columnHourElem = document.querySelector('.column');

    const linesString = getHoursFields()

    const sectorsString = generateNumberRange(1, 23)
        .map(columnHour => `
                <div 
                    class="columnHour" 
                    data-column-number="${columnHour}">
                    ${columnHour + ':00'}
                </div>`)
        .join('')

    columnHourElem.innerHTML = sectorsString;
}
renderHourColumns()


//modal-wrap
const createEvent = document.querySelector('#create');

const popUp = () => {

    document.querySelector('.popup').classList.remove('hide');

    document.onkeydown = function(event) {
        if (event.keyCode == 27) {
            close()
        };
    }

    function close() {
        document.querySelector('.popup').classList.add('hide');
        document.onkeydown = null;
    }

}

const btnClose = document.querySelector('.close')
const closePopUp = () => {
    document.querySelector('.popup').classList.add('hide');
    event.preventDefault()
}

createEvent.addEventListener('click', popUp);
btnClose.addEventListener('click', closePopUp);




//create event
let myEvents = []


const form = document.querySelector('.popup-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {})
    let myEvent = formData;
    const title = document.querySelector("#title").value;
    const startTime = document.querySelector("#dataStart").value;
    const finishTime = document.querySelector("#dataEnd").value;
    const description = document.querySelector("#description").value;

    myEvents.push({
        title: title,
        startTime: startTime,
        finishTime: finishTime,
        description: description,
        id: Math.round(Math.random() * 100)
    });

    console.log(myEvents);

    document.querySelector('.popup').classList.add('hide');


}
renderColumns()
form.addEventListener('submit', onFormSubmit);


const weekDays = document.querySelector('.week');
const nameDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

let valueForDays = 0;
let timeToday = new Date();

//get Monday
// const getMonday = () => {
//     let mondayDay = timeToday.getDay();
//     if (mondayDay !== 1) {
//         timeToday.setDate(timeToday.getDate() - 1);
//     };
// }



const getMonday = () => {
    while (timeToday.getDay() !== 1) {
        timeToday.setDate(timeToday.getDate() - 1);
    };
}

getMonday();

//current month

const monthElem = document.querySelector('.head__row');
const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Черень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
let monthForPopup;
let yearForBlockElem;

const setCurrentMonth = () => {
    const daysNumbElems = document.querySelectorAll('.date-number');

    const arrWithoutFirstArg = [...daysNumbElems].splice(1); // try avoid mutation methods
    let checkOneMonthOnWeek = false;

    let value = 0;
    let setPreviosMonth = () => {
        let result = '';
        if (checkOneMonthOnWeek == true) {
            if ((new Date(timeToday).getMonth() + 1) > 11) {
                result = months[0];
                value = 1;
                yearForBlockElem = timeToday.getFullYear() + +value;
            } else {
                result = months[new Date(timeToday).getMonth() + 1];
            };
        };
        return result;
    };

    let currentMonth = months[new Date(timeToday).getMonth()];
    monthElem.textContent = `${currentMonth} - ${setPreviosMonth()} ${timeToday.getFullYear() + +value}`;
    monthForPopup = new Date(timeToday).getMonth() + 1;
}

setCurrentMonth();



const getDays = () => {
    let result = [];

    generateNumberRange(0, 6)
        .map(sectionNumber => {
            let newDay = new Date(timeToday);
            newDay.setDate(newDay.getDate() + sectionNumber);

            result.push(
                `<div class="date">
                    <span class="date-week">${nameDays[new Date(newDay).getDay()]}</span>
                    <div 
                        class="date-number" 
                        data-block-number='${sectionNumber + valueForDays}'
                    >${new Date(newDay).getDate()}</div>
                </div>`);
        });
    return result.join('');
}

const renderDays = () => {
    weekDays.innerHTML = getDays();
}

renderDays();


//next week prev week

const prevBtn = document.querySelector('.head-prev');
const nextBtn = document.querySelector('.head-next');

const getNextWeek = () => {
    timeToday.setDate(timeToday.getDate() + 7);
    valueForDays += 7;
    renderDays();
    setCurrentMonth();
    makeEvent(events);

}

const getPrevWeek = () => {
    timeToday.setDate(timeToday.getDate() - 7);
    valueForDays -= 7;
    renderDays();
    setCurrentMonth();
    makeEvent(events);

}

prevBtn.addEventListener('click', getPrevWeek);
nextBtn.addEventListener('click', getNextWeek);

//today button

const addButtonElem = document.querySelector('.head-today');

const getToday = () => {
    timeToday = new Date();
    getMonday();
    valueForDays = 0;
    renderDays();
    setCurrentMonth();
    makeEvent(events);

}

addButtonElem.addEventListener('click', getToday);




///

const events = {
    title: 'meet with friends',
    data: new Date(2020, 1, 26),
    startEvent: '12:00',
    endEvent: '14:00',
    description: "",

}
