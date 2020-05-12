let gradeCalc = function(score, maxScore){
    let percentage = (score / maxScore) * 100;
    let grade;
    if (percentage >= 90){
        grade = `A (${percentage})`;
    } else if (percentage < 90 && percentage >= 80){
        grade = `B (${percentage})`;
    } else if (percentage < 80 && percentage >= 70){
        grade = `C (${percentage})`;
    } else if (percentage < 70 && percentage >= 60){
        grade = `D (${percentage})`
    } else {
        grade = `F (${percentage})`
    }
    return grade
}

console.log(gradeCalc(1400, 1500))
console.log(gradeCalc(1300, 1500))
console.log(gradeCalc(1200, 1500))
console.log(gradeCalc(1100, 1500))
console.log(gradeCalc(1000, 1500))