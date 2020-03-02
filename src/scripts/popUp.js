const createEvent = document.querySelector('#create');


export const popUp = () => {

    document.querySelector('.popup').classList.remove('hide');

    document.onkeydown = function(event) {
        if (event.keyCode == 27) {
            close()
        };
    }

    function close() {
        document.querySelector('.popup').classList.add('hide');
        document.onkeydown = null;
    }

}
createEvent.addEventListener('click', popUp);


const btnClose = document.querySelector('.close')
export const closePopUp = () => {
    document.querySelector('.popup').classList.add('hide');
    event.preventDefault();
}

btnClose.addEventListener('click', closePopUp);