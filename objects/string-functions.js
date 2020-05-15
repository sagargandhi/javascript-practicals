let isValidPassword = function(password){
    return (password.length >= 8 && password.includes('password') === false)
}

console.log(isValidPassword('sagar'))
console.log(isValidPassword('sagarpassword'))
console.log(isValidPassword('sagargandhi@121'))