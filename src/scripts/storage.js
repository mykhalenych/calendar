export const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}


export const check = (elem) => {

    let num = elem
    num < 10 ? num = `0${num}` : num;
    return num
}


export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => JSON.parse(localStorage.getItem(key));