import { popUp } from './popUp.js'
import { getItem, setItem } from './storage.js'

export const touchEvent = event => {
    const isField = event.target.classList.contains('multicolumns__field');
    if (isField) {
        document.querySelector('.multicolumns').addEventListener('click', popUp);
    }
    const eventId = event.target.dataset.idNumber;
    if (eventId) {
        const events = getItem('eventsList') || [];
        //data-id-parent
        const startDateValue = event.target.dataset.idParent
        events.map(changeValue => {
            console.log(eventId.innerText, startDateValue)

            changeValue.startDateEvent = startDateValue;
        })
        document.querySelector('.multicolumns').addEventListener('click', popUp);

    }
}
document.querySelector('.multicolumns').addEventListener('click', touchEvent)