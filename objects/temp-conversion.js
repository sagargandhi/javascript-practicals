let tempConversion = function(tempInFarenhiet){
    return {
        farenhiet: tempInFarenhiet,
        degrees: (tempInFarenhiet - 32) * 5 / 9,
        kelvin: ((tempInFarenhiet - 32) * 5/9) + 273.15
    }
}

console.log(tempConversion(32))
console.log(tempConversion(60))