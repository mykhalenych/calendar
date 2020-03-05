import { generateNumbersRange, check, getItem, setItem } from './storage.js'
import { renderEvents } from './renderEvents.js'
import { popUpDelete } from './deleteEvents.js'
import { createObjFromForm } from './createEvent.js'
import { popUp, closePopUp } from './popUp.js'
import { touchEvent, updateEvent } from './touchEvent.js'
import { getMonday, setCurrent, renderCalendarDays, getWeekDay, getLineHour, renderMainPart, renderHourColumns, getTodayIndex, redline, markCurrentDay, getNextWeek, getPrevWeek, getCurrentDay } from './renderCalendar.js'

getMonday();
setCurrent();
renderCalendarDays();
renderMainPart();
getWeekDay();
renderHourColumns();
getTodayIndex();



redline();
markCurrentDay();
renderEvents()
    //getNextWeek();

const onDocumentLoaded = () => {
    getItem('eventsList') || []
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded)