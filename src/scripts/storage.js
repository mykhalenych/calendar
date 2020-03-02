export const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}

export let newEvent = [{
        id: 0,
        name: 'event 1',
        startDateEvent: '2020-02-28T12:00',
        inputEndDate: '2020-02-28T13:00',
        inputDescription: 'it is event 1'
    },

    {
        id: 1,
        name: 'event 2',
        startDateEvent: '2020-02-28T15:00',
        inputEndDate: '2020-02-28T17:00',
        inputDescription: 'it is event 2'
    },
    {
        id: 2,
        name: 'event 3',
        startDateEvent: '2020-02-28T17:30',
        inputEndDate: '2020-02-28T18:00',
        inputDescription: 'it is event 3'
    },
    {
        id: 6,
        name: 'event 1',
        startDateEvent: '2020-03-03T12:00',
        inputEndDate: '2020-03-03T13:00',
        inputDescription: 'it is event 1'
    },

    {
        id: 4,
        name: 'event 2',
        startDateEvent: '2020-03-03T15:00',
        inputEndDate: '2020-03-03T17:00',
        inputDescription: 'it is event 2'
    },
    {
        id: 5,
        name: 'event 3',
        startDateEvent: '2020-04-03T17:30',
        inputEndDate: '2020-04-03T18:00',
        inputDescription: 'it is event 3'
    },

];

export const check = (elem) => {

    let num = elem
    num < 10 ? num = `0${num}` : num;
    return num
}

const storage = {

}

export const setItem = (key, value) => {
    Object.assign(storage, {
        [key]: value
    })

}

export const getItem = key => storage[key]