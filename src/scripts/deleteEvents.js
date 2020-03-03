 import { getItem, setItem } from './storage.js'
 import { renderEvents } from './renderEvents.js'
 import { popUp } from './popUp.js'
 //export const popUpDelete = event => {
 //  const eventId = event.target.dataset.idNumber;
 //  if (!eventId) {
 //      return
 //  }
 //  document.querySelector('.popup-delete').classList.add('hide');

 //  document.onkeydown = function(event) {
 //      if (event.keyCode == 27) {
 //          close()
 //      };
 //  }

 //  function close() {
 //      document.querySelector('.popup-delete').classList.add('hide');
 //      document.onkeydown = null;
 //  }
 //  const deleteEvent = document.querySelector('.delete-btn')
 //  const deleteEvents = () => {
 //      for (let i = 0; i < events.length; i++) {
 //          if (eventId == events[i].id) {
 //              let a = events.splice(i, 1)
 //              i--;
 //              document.querySelector('.popup-delete').classList.add('hide');

 //          }
 //      };
 //  }
 //  deleteEvent.addEventListener('click', deleteEvents)


 // }

 export function popUpDelete(event) {



     const events = getItem('eventsList') || [];

     let eventId;
     const isEventClose = event.target.closest('.event');

     if (!isEventClose) {
         return
     }

     eventId = isEventClose.dataset.idNumber;

     const popUpTitle = document.querySelector('#title');
     const popUpDataStart = document.querySelector('#dataStart');
     const popUpDataEnd = document.querySelector('#dataEnd');
     const popUpDescription = document.querySelector('#description');
     const popUpColor = document.querySelector('#color');


     for (let i = 0; i < events.length; i++) {
         if (eventId == events[i].id) {

             popUpTitle.value = events[i].name;
             popUpDataStart.value = events[i].startDateEvent
             popUpDataEnd.value = events[i].inputEndDate
             popUpDescription.value = events[i].inputDescription;
             popUpColor.value = events[i].inputColor;
         }
     }
     popUp()

     function isDelete() {
         //  event.preventDefault();

         for (let i = 0; i < events.length; i++) {
             if (eventId === events[i].id) {
                 events.splice(i, 1);
                 i--
                 document.querySelector('.popup').classList.add('hide');
                 setItem('eventsList', events);

             }
         }
     }
     renderEvents();
     const deleteBtn = document.querySelector('.delete-btn');
     deleteBtn.addEventListener('click', isDelete)
 }

 document.querySelector('.multicolumns').addEventListener('click', popUpDelete)