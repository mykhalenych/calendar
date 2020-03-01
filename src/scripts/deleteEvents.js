import { newEvent, getCurrentDay } from './renderCalendar'

export const deleteEvents = event => {
    const eventId = event.target.dataset.idNumber;
    if (eventId) {
        for (let i = 0; i < newEvent.length; i++) {
            if (eventId == newEvent[i].id) {
                let a = newEvent.splice(i, 1)
                i--;
                getCurrentDay()
            }
        };
    }

}
document.querySelector('.multicolumns').addEventListener('click', deleteEvents)