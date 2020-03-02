import { newEvent } from './storage.js'
import { renderEvents } from './renderEvents.js'

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



    console.log(newEvent)
    newEvent.push({
        id: Math.round(Math.random() * 100),
        name: inputTitle.value,
        startDateEvent: inputStartDate.value,
        inputEndDate: inputEndDate.value,
        inputDescription: inputDescription.value,
    });
    console.log(newEvent)
    document.querySelector('.popup').classList.add('hide');

    renderEvents();

}

saveFormFromPopUp.addEventListener('click', createObjFromForm);