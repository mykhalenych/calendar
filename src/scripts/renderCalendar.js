const daysElem = document.querySelector('.week');
const nameDays = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}

export let newEvent = [{
        id: 0,
        name: 'event 1',
        startDateEvent: '2020-03-01T12:00',
        inputEndDate: '2020-03-01T13:00',
        inputDescription: 'it is event 1'
    },

    {
        id: 1,
        name: 'event 2',
        startDateEvent: '2020-03-01T15:00',
        inputEndDate: '2020-03-01T17:00',
        inputDescription: 'it is event 2'
    },
    {
        id: 2,
        name: 'event 3',
        startDateEvent: '2020-03-01T17:30',
        inputEndDate: '2020-03-01T18:00',
        inputDescription: 'it is event 3'
    },

];

const check = (elem) => {

    let num = elem
    num < 10 ? num = `0${num}` : num;
    return num
}

let setDayInWeek = 0;
let timeToday = new Date();

const getMonday = () => {
    while (timeToday.getDay() !== 1) {
        timeToday.setDate(timeToday.getDate() - 1);
    };
}
getMonday();


const monthElem = document.querySelector('.head__row');
const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];


const setCurrent = () => {
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

setCurrent();


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

const renderCalendarDays = () => {
    daysElem.innerHTML = getDays();
}

renderCalendarDays();


const mainPartOfCalendar = document.querySelector('.multicolumns');

let time = 0;
const createTime = () => {
    time++;
    return time;
}
const getWeekDay = () => {
    let result = [];
    let day = document.querySelector('.date-number').innerHTML;
    let dayToMain = document.querySelector('.date-number').innerHTML;

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
                        date-day-today="${new Date(timeToday).getFullYear()+'-'}${new Date(timeToday).getMonth() + 1+'-'}${check(dayToMain++)}"
                        class="multicolumns__field" 
                        data-block-number='${sectionNumber + setDayInWeek}'
                        data-date-number='${day++}'
                        data-month-number='${new Date(timeToday).getMonth() + 1}'
                        data-year-number='${new Date(timeToday).getFullYear()}'
                        data-time-number='${time}'
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
                    data-block-number='${sectionNumber + setDayInWeek} '
                    data-date-number='${day++}'
                    data-month-number='${new Date(timeToday).getMonth() + 1}'
                    data-year-number='${new Date(timeToday).getFullYear()}'
                ></div>`
                );
            });

        let ElemFromFirstDate = document.querySelectorAll('.date-number')[firstDate].textContent;
        let monthNum = new Date(timeToday).getMonth() + 2;
        if (new Date(timeToday).getMonth() + 2 >= 12) {
            monthNum = 1;
        };

        const nextYear = document.querySelector('.head__row').textContent.slice(-4);
        generateNumbersRange(1, 7 - firstDate)
            .map(sectionNumber => {
                let daysNum = ElemFromFirstDate;
                let monthsNum = monthNum;
                let yearNum = nextYear;
                result.push(
                    `
                <div 
                    id="${yearNum+'-'}${monthsNum+'-'}${check(daysNum++)}"
                    class="multicolumns__field" 
                    data-block-number='${sectionNumber + setDayInWeek + 2}'
                    data-date-number='${ElemFromFirstDate++}'
                    data-month-number='${monthNum}'
                    data-year-number='${nextYear}'
                ></div>`
                );
            });
    };
    return result.join('');
}

const getLineHour = () => {
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


const renderMainPart = () => {
    mainPartOfCalendar.innerHTML = getLineHour();
};

renderMainPart()

let todayIndex;
const getTodayIndex = () => {

    const dayOfweek = new Date().getDay() - 1;

    dayOfweek < 0 ? todayIndex = 6 : todayIndex = dayOfweek;
}

getTodayIndex();


const redline = () => {
    const todayHour = new Date().getHours();
    const todayMinutes = new Date().getMinutes();
    let time = 60 * todayHour + todayMinutes
    const widthElem = document.querySelector('.multicolumns__field').offsetWidth;

    const redline = document.querySelector('.redline');
    redline.style.top = `${time + 163}px`;
    redline.style.left = `${widthElem * todayIndex + 60}px`;
    redline.style.width = `${widthElem}`
}
redline()


const renderHourColumns = () => {
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
 renderHourColumns()



 const markCurrentDay = () => {
     const weekDaysElems = document.querySelectorAll('.date-number');
     let currentNumberDay;
     new Date().getDay() - 1 < 0 ? currentNumberDay = 6 : currentNumberDay = new Date().getDay() - 1;
     const findFirstDay = [...weekDaysElems].find(arg => arg.dataset.blockNumber == currentNumberDay);
     if (findFirstDay !== undefined) {
         findFirstDay.classList.add('active');
     };
 }

 markCurrentDay();



 

 const nextArrowElem = document.querySelector('.head-next');
 const prevArrowElem = document.querySelector('.head-prev');

 const getNextWeek = () => {
     timeToday.setDate(timeToday.getDate() + 7);
     setDayInWeek += 7;
     renderCalendarDays();
     setCurrent();
     renderMainPart();
     renderHourColumns()
     markCurrentDay(); 
     renderEvents();
     redline()
     renderEvents()

 }

 const getPrevWeek = () => {
     timeToday.setDate(timeToday.getDate() - 7);
     setDayInWeek -= 7;
     renderCalendarDays();
     setCurrent();
     renderMainPart();
     renderHourColumns()
     markCurrentDay();
     renderEvents();
     redline()
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
     renderMainPart();
     setCurrent();
     markCurrentDay();
     redline();
     renderEvents();

 }

 addButtonElem.addEventListener('click', getCurrentDay);

 
 const createEvent = document.querySelector('#create');
 
 
 export const popUp = () => {
 
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
     event.preventDefault();
 }
 
 createEvent.addEventListener('click', popUp);
 btnClose.addEventListener('click', closePopUp);
 
 
 const saveFormFromPopUp = document.querySelector('.submit')
 
 const createObjFromForm = () => {
     event.preventDefault();
    //  const formData = [...new FormData(form)]
    //      .reduce((acc, [field, value]) => ({...acc, [field]: value }), {})
         //  alert(JSON.stringify(formData));
     let inputTitle = document.querySelector('#title');
     let inputStartDate = document.querySelector('#dataStart');
     let inputEndDate = document.querySelector('#dataEnd');
     let inputDescription = document.querySelector('#description');
 
 
 
 
     newEvent.push({
         id: Math.round(Math.random() * 100),
         name: inputTitle.value,
         startDateEvent: inputStartDate.value,
         inputEndDate: inputEndDate.value,
         inputDescription: inputDescription.value,
     });
     document.querySelector('.popup').classList.add('hide');
 
     renderEvents();
 
 }
 
 saveFormFromPopUp.addEventListener('click', createObjFromForm);


 const renderEvents = () => {

    let arrElemForTime = [];
    let arrElemRender = [];
    newEvent.map(eventFromForm => {

        let TimeNow = new Date(`${eventFromForm.startDateEvent}`);
        let TimeEnd = new Date(`${eventFromForm.inputEndDate}`);
        let ChildSelector = `${TimeNow.getFullYear()+'-'}${TimeNow.getMonth()+1+'-'}${check(TimeNow.getDate())}`;
        let getHours = TimeNow.getHours();

        if (getHours < 10) {
            getHours = `0${TimeNow.getHours()}`;
        };
        let parentSelector = document.querySelector(`[id='${getHours}']`);
        if (parentSelector === null) return;
        let sectionElem = parentSelector.querySelector(`[id='${ChildSelector}']`);
        if (sectionElem === null) {
            return;
        };

        let hours = TimeNow.getHours();
        let height = (TimeEnd.getHours() - hours) * 60;

        let startTime = `${check(new Date(eventFromForm.startDateEvent).getHours())+':'+check(new Date(eventFromForm.startDateEvent).getMinutes())}`;

        let endTime = `${check(new Date(eventFromForm.inputEndDate).getHours())+':'+check(new Date(eventFromForm.inputEndDate).getMinutes())}`;

        let eventElem = `<div id='${eventFromForm.id}' 
                           class="event" 
                           data-id-number='${eventFromForm.id}'
                           data-time-ivent='${hours}'
                           data-id-parent='${ChildSelector}'
                           style="
                           height:${height}px; top:${(hours * 60)+163}px;">
                               <div class="event__name" data-id-number='${eventFromForm.id}'>
                                   ${eventFromForm.name}
                               </div>
                               <div class="event__time" data-id-number='${eventFromForm.id}'>
                                   ${startTime} - ${endTime}
                               </div>
                               <div class="event__description" data-id-number='${eventFromForm.id}'>
                                   ${eventFromForm.inputDescription}
                               </div>
                       </div>`
        arrElemForTime.push(sectionElem);
        arrElemRender.push(eventElem);
    });
    let value = 0;
    const sectionElemRender = () => {
        if (!arrElemRender[value]) {
            return
        } else {
            arrElemForTime[value].innerHTML = arrElemRender[value];
            value++
        }
    };
    let interval = setInterval(sectionElemRender, 100);
    setTimeout(() => { clearInterval(interval) }, 5000);
}

renderEvents()



 const touchEvent = event => {
    const isField = event.target.classList.contains('multicolumns__field');
    if (isField) {
        document.querySelector('.multicolumns').addEventListener('click', popUp);

    }
}
document.querySelector('.multicolumns').addEventListener('click', touchEvent)



 const popUpDelete = event => {
    const eventId = event.target.dataset.idNumber;
    if (eventId) {
            document.querySelector('.popup-delete').classList.remove('hide');
      
            document.onkeydown = function(event) {
                if (event.keyCode == 27) {
                    close()
                };
            }
            const btnCloseDelete = document.querySelector('.close-delete')

            function close() {
               
                document.querySelector('.popup-delete').classList.add('hide');
                document.onkeydown = null;
            }
            const deleteEvent = document.querySelector('.delete-btn')
            const deleteEvents = () => {
                for (let i = 0; i < newEvent.length; i++) {
                    if (eventId == newEvent[i].id) {
                        let a = newEvent.splice(i, 1)
                        i--;
                        getCurrentDay()
                        document.querySelector('.popup-delete').classList.add('hide');

                    }
                };
            }

            deleteEvent.addEventListener('click', deleteEvents)
            btnCloseDelete.addEventListener('click', close);
        }
       
    }



document.querySelector('.multicolumns').addEventListener('click', popUpDelete)
renderEvents()