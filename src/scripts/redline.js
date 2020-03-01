let todayIndex;
const getTodayIndex = () => {

    const dayOfweek = new Date().getDay() - 1;

    dayOfweek < 0 ? todayIndex = 6 : todayIndex = dayOfweek;
}

getTodayIndex();


export const redline = () => {
    const todayHour = new Date().getHours();
    const todayMinutes = new Date().getMinutes();
    let time = 60 * todayHour + todayMinutes
    const widthElem = document.querySelector('.multicolumns__section').offsetWidth;

    const redline = document.querySelector('.redline');
    redline.style.top = `${time + 163}px`;
    redline.style.left = `${widthElem * todayIndex + 60}px`;
    redline.style.width = `${widthElem}`
}
redline()