import { popUp } from './popUp.js'
import { getItem, setItem } from './storage.js'
import { createObjFromForm } from './createEvent.js'
import { renderEvents } from './renderEvents.js'


// export const touchEvent = event => {
//     // const isField = event.target.classList.contains('multicolumns__field');
//     // if (isField) {
//     //     document.querySelector('.multicolumns').addEventListener('click', popUp);
//     // }
//     const eventId = event.target.dataset.idNumber;
//     if (eventId) {
//         const events = getItem('eventsList') || [];
//         document.querySelector('.multicolumns').addEventListener('click', showEditPopup);
//         let InValue = event.target.dataset.idNumber
//         let lol = event.target.closest('.multicolumns__line').dataset.lineNumber
//         console.log(InValue, lol)
//             //id-number


//         //data-id-parent
//         // const startDateValue = event.target.dataset.idParent

//         let inputTitle = document.querySelector('#title');
//         let inputStartDate = document.querySelector('#dataStart');
//         let inputEndDate = document.querySelector('#dataEnd');
//         let inputDescription = document.querySelector('#description');
//         let inputColor = document.querySelector('#color');
//         events.map(changeValue => {
//                 document.querySelector('#title').value = changeValue.name;
//                 //   console.log(document.querySelector('#title').value = changeValue.name)
//                 document.querySelector('#dataStart').value = changeValue.startDateEvent;
//                 //  console.log(changeValue.id, changeValue.name, changeValue.startDateEvent, changeValue.inputDescription)

//                 //changeValue.startDateEvent = startDateValue;
//             })
//             // document.querySelector('.multicolumns').addEventListener('click', popUp);


//     }
// }
// document.querySelector('.multicolumns').addEventListener('click', touchEvent)



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



    renderEvents();

}