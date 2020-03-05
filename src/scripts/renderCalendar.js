import { generateNumbersRange, check } from './storage.js'
import { renderEvents } from './renderEvents.js'
import { popUpDelete } from './deleteEvents.js'

const daysElem = document.querySelector('.week');
const nameDays = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

let setDayInWeek = 0;
export let timeToday = new Date();

export const getMonday = () => {
        while (timeToday.getDay() !== 1) {
            timeToday.setDate(timeToday.getDate() - 1);
        };
    }
    //getMonday();


const monthElem = document.querySelector('.head__row');
const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];


export const setCurrent = () => {
    const allDaysFromWeek = document.querySelectorAll('.date-number');

    const dayFromallDaysFromWeek = [...allDaysFromWeek].splice(1);
    let checkOneMonthOnWeek = false;
    let value = 0;
    let setPreviosMonth = () => {
        let result = '';
        if (checkOneMonthOnWeek == true) {
            if ((new Date(timeToday).getMonth() + 1) > 11) {
                result = months[0];
                value = 1;
                let yearForBlockElem = timeToday.getFullYear() + +value;
            } else {
                result = months[new Date(timeToday).getMonth() + 1];
            };
        };
        return result;
    };

    let currentMonth = months[new Date(timeToday).getMonth()];
    monthElem.textContent = `${currentMonth} - ${setPreviosMonth()} ${timeToday.getFullYear() + +value}`;
    let monthForPopup = new Date(timeToday).getMonth() + 1;
}

//setCurrent();


const getDays = () => {
    let result = [];

    generateNumbersRange(0, 6)
        .map(sectionNumber => {
            let newDay = new Date(timeToday);
            newDay.setDate(newDay.getDate() + sectionNumber);

            result.push(
                `<div class="date">
                    <span class="week-day">${nameDays[new Date(newDay).getDay()]}</span>
                    <div 
                        class="date-number" 
                        data-block-number='${sectionNumber + setDayInWeek}'
                    >${new Date(newDay).getDate()}</div>
                </div>`);
        });
    return result.join('');
}

export const renderCalendarDays = () => {
    daysElem.innerHTML = getDays();
}

//renderCalendarDays();


const mainPartOfCalendar = document.querySelector('.multicolumns');

let time = 0;
const createTime = () => {
    time++;
    return time;
}
export const getWeekDay = () => {
    let dayToMain = document.querySelector('.date-number').innerHTML;
    let day = document.querySelector('.date__number');

    let result = [];

    const allDaysFromWeek = document.querySelectorAll('.date-number');
    const dayFromallDaysFromWeek = [...allDaysFromWeek].splice(1);
    const findFirstDay = dayFromallDaysFromWeek.find(arg => arg.textContent == 1);
    createTime();
    if (findFirstDay === undefined) {
        generateNumbersRange(1, 7)
            .map(sectionNumber => {
                result.push(
                    `
                    <div 
                        id="${new Date(timeToday).getFullYear()+'-'}${new Date(timeToday).getMonth() + 1+'-'}${check(dayToMain++)}"
                        class="multicolumns__field" 
                        date-id-number="${new Date(timeToday).getFullYear()+'-'}${new Date(timeToday).getMonth() + 1+'-'}${check(dayToMain)}"
                        "           
                    ></div>`
                );
            });
    } else {
        const firstDate = dayFromallDaysFromWeek.indexOf(findFirstDay) + 1;
        generateNumbersRange(1, firstDate)
            .map(sectionNumber => {
                result.push(
                    `
                <div 
                    id="${new Date(timeToday).getFullYear()+'-'}${new Date(timeToday).getMonth() + 1+'-'}${dayToMain++}"
                    class="multicolumns__field" 
                 
                ></div>`
                );
            });



        let ElemFromFirstDate = document.querySelectorAll('.date-number')[firstDate].textContent;
        let monthNum = new Date(timeToday).getMonth() + 2;
        if (new Date(timeToday).getMonth() + 2 >= 12) {
            monthNum = 1;
        };

        const nextYearForBlock = document.querySelector('.head__row').textContent.slice(-4);

        generateNumbersRange(1, 7 - firstDate)
            .map(sectionNumber => {
                let daysNum = ElemFromFirstDate;
                let monthsNum = monthNum;
                let yearNum = nextYearForBlock;
                result.push(
                    `
                <div 
                    id="${yearNum+'-'}${monthsNum+'-'}${check(daysNum++)}"
                    class="multicolumns__field" 
                  
                ></div>`
                );
            });
    };
    return result.join('');

};

export const getLineHour = () => {
    let i = 0;
    const blocksString = getWeekDay(i);

    return generateNumbersRange(1, 24)
        .map(lineNumber => `
                <div 
                id="${check(lineNumber-1)}"
                    class="multicolumns__line" 
                    data-line-number='${lineNumber + setDayInWeek}'
                    data-time-set='${lineNumber}'
                >${blocksString}</div>`).join('');
}


export const renderMainPart = () => {
    mainPartOfCalendar.innerHTML = getLineHour();
}

// renderMainPart()
// getWeekDay()


export const renderHourColumns = () => {
        const columnHourElem = document.querySelector('.column');


        const sectorsString = generateNumbersRange(1, 23)
            .map(columnHour => `
                    <div 
                        class="columnHour" 
                        data-column-number="${columnHour}">
                        ${(columnHour < 10) ? `0${columnHour}` : columnHour}:00
                        </div>`)
         .join('')

     columnHourElem.innerHTML = sectorsString;
 }
//  renderHourColumns()

 let todayIndex;
 export const getTodayIndex = () => {
 
     const dayOfweek = new Date().getDay() - 1;
 
     dayOfweek < 0 ? todayIndex = 6 : todayIndex = dayOfweek;
 }
 
 //getTodayIndex();
 
 
 export const redline = () => {
     const todayHour = new Date().getHours();
     const todayMinutes = new Date().getMinutes();
     let time = 60 * todayHour + todayMinutes
     const widthElem = document.querySelector('.multicolumns__field').offsetWidth;
 
     const redline = document.querySelector('.redline');
     redline.style.top = `${time + 163}px`;
     redline.style.left = `${widthElem * todayIndex + 60}px`;
     redline.style.width = `${widthElem}`
 }
//  redline()

 export const markCurrentDay = () => {
     const weekDaysElems = document.querySelectorAll('.date-number');
     let currentNumberDay;
     new Date().getDay() - 1 < 0 ? currentNumberDay = 6 : currentNumberDay = new Date().getDay() - 1;
     const findFirstDay = [...weekDaysElems].find(arg => arg.dataset.blockNumber == currentNumberDay);
     if (findFirstDay !== undefined) {
         findFirstDay.classList.add('active');
     };
 }

 //markCurrentDay();

 const nextArrowElem = document.querySelector('.head-next');
 const prevArrowElem = document.querySelector('.head-prev');

 export const getNextWeek = () => {
     timeToday.setDate(timeToday.getDate() + 7);
     setDayInWeek += 7;
     renderCalendarDays();
     setCurrent();
     renderMainPart();
     renderEvents();
     renderHourColumns()
     markCurrentDay(); 

 }

 export const getPrevWeek = () => {
     timeToday.setDate(timeToday.getDate() - 7);
     setDayInWeek -= 7;
     renderCalendarDays();
     setCurrent();
     renderMainPart();
     renderHourColumns()
     markCurrentDay();
     renderEvents();
     renderEvents()
 }

 nextArrowElem.addEventListener('click', getNextWeek);
 prevArrowElem.addEventListener('click', getPrevWeek);



 const addButtonElem = document.querySelector('.head-today');

  export const getCurrentDay = () => {
     timeToday = new Date();
     getMonday();
     setDayInWeek = 0;
     renderCalendarDays();
     renderEvents();
     renderMainPart();
     setCurrent();
     markCurrentDay();
     redline();

 }

 addButtonElem.addEventListener('click', getCurrentDay);


//поміняти
//  document.querySelector('.multicolumns').addEventListener('click', popUpDelete)
//  renderEvents()