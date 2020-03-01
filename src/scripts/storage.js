const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}

export let newEvent = [{
        id: 0,
        name: 'event 1',
        startDateEvent: '2020-03-01T12:00',
        inputEndDate: '2020-03-01T13:00',
        inputDescription: 'it is event 1'
    },

    {
        id: 1,
        name: 'event 2',
        startDateEvent: '2020-03-01T15:00',
        inputEndDate: '2020-03-01T17:00',
        inputDescription: 'it is event 2'
    },
    {
        id: 2,
        name: 'event 3',
        startDateEvent: '2020-03-01T17:30',
        inputEndDate: '2020-03-01T18:00',
        inputDescription: 'it is event 3'
    },

];

const check = (elem) => {

    let num = elem
    num < 10 ? num = `0${num}` : num;
    return num
}