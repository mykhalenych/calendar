export const popUpDelete = event => {
    const eventId = event.target.dataset.idNumber;
    if (eventId) {
        document.querySelector('.popup-delete').classList.remove('hide');

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
            for (let i = 0; i < newEvent.length; i++) {
                if (eventId == newEvent[i].id) {
                    let a = newEvent.splice(i, 1)
                    i--;
                    getCurrentDay()
                    document.querySelector('.popup-delete').classList.add('hide');

                }
            };
        }

        deleteEvent.addEventListener('click', deleteEvents)

    }

}



document.querySelector('.multicolumns').addEventListener('click', popUpDelete)
renderEvents()