 import { getItem } from './storage.js'
 import { renderEvents } from './renderEvents.js'
 export const popUpDelete = event => {
     const eventId = event.target.dataset.idNumber;
     if (!eventId) {
         return
     }
     document.querySelector('.popup-delete').classList.add('hide');

     document.onkeydown = function(event) {
         if (event.keyCode == 27) {
             close()
         };
     }

     function close() {
         document.querySelector('.popup-delete').classList.add('hide');
         document.onkeydown = null;
     }
     const deleteEvent = document.querySelector('.delete-btn')
     const deleteEvents = () => {
         for (let i = 0; i < events.length; i++) {
             if (eventId == events[i].id) {
                 let a = events.splice(i, 1)
                 i--;
                 document.querySelector('.popup-delete').classList.add('hide');

             }
         };
     }
     deleteEvent.addEventListener('click', deleteEvents)

 }