const makeGuess = function (num){
    const max = 10
    const min = 1
    const initial = Math.floor(num * (max - min + 1)) + 1
    const status = `Got number ${initial} : ${initial < 6}`
    console.log(status)
    return initial < 6
}

makeGuess(Math.random())
makeGuess(Math.random())
makeGuess(Math.random())
makeGuess(Math.random())
makeGuess(Math.random())
