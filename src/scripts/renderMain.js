import { generateNumberRange } from './storage'


const getFields = () => {

    return generateNumberRange(1, 24)
        .map(weekHour => `
                <div 
                    class="multicolumns-column-field" 
                    data-week-hour="${weekHour}">
                </div>`)
        .join('')
}

const renderColumns = (myEvent) => {
    const columnElem = document.querySelector('.multicolumns');

    const linesString = getFields()

    const sectorsString = generateNumberRange(1, 7)
        .map(columnWeek => `
                <div 
                    class="multicolumns-column" 
                    data-week-number="${columnWeek}">
                ${linesString}</div>`)
        .join('')

    if (myEvent) {
        generateNumberRange(1, 7).map(columnWeek => `
            <div 
                class="multicolumns-column" 
                data-week-number="${columnWeek}"><div class="myEvent">${myEvent}</div>
            </div>`)
            .join('')
    }

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

export const renderHourColumns = () => {
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