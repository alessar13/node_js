let count = 0;
const reqFunction = (req, res) => {
    count++;
    res.end(`Hello, Govinda, for ${count} times`)
}

export default reqFunction;