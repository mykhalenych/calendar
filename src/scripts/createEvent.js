const createEvent = document.querySelector('#create');


const popUp = () => {

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

const btnClose = document.querySelector('.close')
const closePopUp = () => {
    document.querySelector('.popup').classList.add('hide');
    event.preventDefault()
}

createEvent.addEventListener('click', popUp);
btnClose.addEventListener('click', closePopUp);
//create event

const form = document.querySelector('.popup-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {})
    alert(JSON.stringify(formData));

}

form.addEventListener('submit', onFormSubmit);