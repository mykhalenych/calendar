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