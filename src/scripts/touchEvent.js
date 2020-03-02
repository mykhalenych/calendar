import { popUp } from './popUp.js'

export const touchEvent = event => {
    const isField = event.target.classList.contains('multicolumns__field');
    if (isField) {
        document.querySelector('.multicolumns').addEventListener('click', popUp);

    }
}
document.querySelector('.multicolumns').addEventListener('click', touchEvent)