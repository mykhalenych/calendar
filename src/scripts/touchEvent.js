import { popUp } from './popUp.js'
import { getItem, setItem } from './storage.js'
import { renderEvents } from './renderEvents.js'


export const touchEvent = event => {
    const isField = event.target.classList.contains('multicolumns__field');
    if (isField) {
        document.querySelector('.multicolumns').addEventListener('click', popUp);
    }
}





document.querySelector('.multicolumns').addEventListener('click', touchEvent, true)



export const updateEvent = (event) => {
    event.preventDefault();


    let inputTitle = document.querySelector('#title');
    let inputStartDate = document.querySelector('#dataStart');
    let inputEndDate = document.querySelector('#dataEnd');
    let inputDescription = document.querySelector('#description');
    let inputColor = document.querySelector('#color');


    const events = getItem('eventsList') || [];

    elem.name = inputTitle.value,
        elem.startDateEvent = inputStartDate.value,
        elem.inputEndDate = inputEndDate.value,
        elem.description = inputDescription.value;
    elem.color = inputColor.nodeValue;

    setItem('eventsList', events);
    renderEvents();

}