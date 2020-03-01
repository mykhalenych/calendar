addButtonElem.addEventListener('click', getCurrentDay);


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

const btnClose = document.querySelector('.close')
const closePopUp = () => {
    document.querySelector('.popup').classList.add('hide');
    event.preventDefault();
}

createEvent.addEventListener('click', popUp);
btnClose.addEventListener('click', closePopUp);


const saveFormFromPopUp = document.querySelector('.submit')

const form = document.querySelector('.form')
const createObjFromForm = () => {
    event.preventDefault();
    //  const formData = [...new FormData(form)]
    //      .reduce((acc, [field, value]) => ({...acc, [field]: value }), {})
    //  alert(JSON.stringify(formData));
    let inputTitle = document.querySelector('#title');
    let inputStartDate = document.querySelector('#dataStart');
    let inputEndDate = document.querySelector('#dataEnd');
    let inputDescription = document.querySelector('#description');




    newEvent.push({
        id: Math.round(Math.random() * 100),
        name: inputTitle.value,
        startDateEvent: inputStartDate.value,
        inputEndDate: inputEndDate.value,
        inputDescription: inputDescription.value,
    });
    document.querySelector('.popup').classList.add('hide');

    renderEvents();

}

saveFormFromPopUp.addEventListener('click', createObjFromForm);