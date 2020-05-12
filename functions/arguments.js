let getTip = function(total, tipPercent = 0.2){
    return total * tipPercent
}

let total = 40;
let tipPercent = 0.25;
let tip = getTip(total, tipPercent)

console.log(`The total - ${total} tipPercent - ${tipPercent * 100} tip - ${tip} `);