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