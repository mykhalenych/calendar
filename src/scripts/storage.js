export const generateNumberRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}