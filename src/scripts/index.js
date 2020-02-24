// storage

const generateNumberRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}

// render main

const getFields = () => {

    return generateNumberRange(1, 24)
        .map(fieldNumber => `
            <div 
                class="multicolumns-column-field" 
                data-field-number="${fieldNumber}">
            </div>`)
        .join('')
}

const columnElem = document.querySelector('.multicolumns');
const renderColumns = () => {
    const linesString = getFields()

    const sectorsString = generateNumberRange(1, 7)
        .map(columnNumber => `
            <div 
                class="multicolumns-column" 
                data-column-number="${columnNumber}">
            ${linesString}</div>`)
        .join('')

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

const columnHourElem = document.querySelector('.column');
const renderHourColumns = () => {
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

const form = document.querySelector('.popup-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {})
    alert(JSON.stringify(formData));

}

form.addEventListener('submit', onFormSubmit);

//render header
let timeToday = new Date()
let myValue = 0;
const week = document.querySelector('.week');
const nameDays = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
const getWeekDay = () => {
    let result = [];

    generateNumberRange(0, 6)
        .map(sectionNumber => {
            let newDay = new Date(timeToday);
            newDay.setDate(newDay.getDate() + sectionNumber);

            result.push(
                `<div class="date">
                    <span 
                        class="date-week">
                        ${nameDays[new Date(newDay).getDay()]}
                    </span>
                    <span
                        class="date-number" 
                        data-block-number='${sectionNumber + myValue}'
                    >${new Date(newDay).getDate()}</div>
                </span>`);
        });
    return result.join('');
}

const renderWeek = () => {
    week.innerHTML = getWeekDay();
}
renderHourColumns();
renderColumns();
renderWeek()