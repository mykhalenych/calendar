// const daysInWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
// const week = document.querySelector('.week')

// const getTodayDayNumber = () => {
//     return new Date().getDate();
// }





// const renderWeek = () => {
//     const dateWeekDay = getDateWeekDay();
//     const dateWeekNumber = getDateWeekNumber();
//     const weekDay = [1, 2, 3, 4, 5, 6, 7].map(dateNumber => `
//         <div 
//             class="date" 
//             data-date-number="${dateNumber}">
//         ${dateWeekDay},${dateWeekNumber}
//         </div>`)
//         .join('');

//     week.innerHTML = weekDay;
// }

// const getDateWeekDay = () => {
//     [1, 2, 3, 4, 5, 6, 7].map(dateDay => `
//         <span 
//             class="date-week" 
//             data-date-day="${dateDay}">${dateDay}
//         </span>`).join('');


// }

// const getDateWeekNumber = () => {
//     daysInWeek
//         .map(dateNumber => `
//     <span 
//         class="date-number"
//         data-date-number="${dateNumber}"
//         >${dateNumber}
//     </span>
//     `).join('');


// }

// renderWeek()