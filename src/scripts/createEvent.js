import { getItem, setItem } from './storage.js'
import { renderEvents } from './renderEvents.js'
import { updateEvent } from './touchEvent.js'
const saveFormFromPopUp = document.querySelector('.submit')
const btnUpdateEvent = document.querySelector('.submit');
export const createObjFromForm = () => {
    event.preventDefault();
    if (btnUpdateEvent.classList.contains("update")) {
        updateEvent(event);
        return;
    };

    //  const formData = [...new FormData(form)]
    //      .reduce((acc, [field, value]) => ({...acc, [field]: value }), {})
    //  alert(JSON.stringify(formData));
    let inputTitle = document.querySelector('#title');
    let inputStartDate = document.querySelector('#dataStart');
    let inputEndDate = document.querySelector('#dataEnd');
    let inputDescription = document.querySelector('#description');
    let inputColor = document.querySelector('#color');

    const events = getItem('eventsList') || [];

    events.push({
        id: Math.round(Math.random() * 100),
        name: inputTitle.value,
        startDateEvent: inputStartDate.value,
        inputEndDate: inputEndDate.value,
        inputDescription: inputDescription.value,
        inputColor: inputColor.value,
    });
    document.querySelector('.popup').classList.add('hide');
    setItem('eventsList', events);
    console.log(events)
    renderEvents();


}

saveFormFromPopUp.addEventListener('click', createObjFromForm);