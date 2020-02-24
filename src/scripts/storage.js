const columnElem = document.querySelector('.multicolumns');
const columnHourElem = document.querySelector('.column');
const createEvent = document.querySelector('#create');

const generateNumberRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}