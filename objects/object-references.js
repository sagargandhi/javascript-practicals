const myAccount = {
    name: 'Sagar',
    income: 0,
    expense: 0
}

const addExpense = function (account, amount){
    account.expense = account.expense + amount
}

const addIncome = function (account, amount){
    account.income = account.income + amount
}

const accountSummary = function(account){
    return `${account.name} has ${account.income - account.expense}.${account.income} in income, ${account.expense} in expenses`
}

const resetAccount = function (account) {
    account.income = 0
    account.expense = 0
}

addIncome(myAccount, 10000)
addExpense(myAccount, 4000)
addExpense(myAccount, 300)
console.log(accountSummary(myAccount))
resetAccount(myAccount)
console.log(accountSummary(myAccount))

addIncome(myAccount, 20000)
addExpense(myAccount, 500)
addExpense(myAccount, 900)
console.log(accountSummary(myAccount))


