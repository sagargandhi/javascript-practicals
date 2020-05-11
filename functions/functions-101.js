let farenhietToDegrees = function(tempInFarenhiet){
    let tempInDegrees = (tempInFarenhiet - 32)*5/9;
    return tempInDegrees;
}

console.log("Temp in degrees -> " + farenhietToDegrees(32));

console.log("Temp in degrees -> " + farenhietToDegrees(68));
console.log("Temp in degrees -> " + farenhietToDegrees(100));

