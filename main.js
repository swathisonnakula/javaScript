transcations = [
    { id: 1, text: 'flower', amount: -20 },
    { id: 2, text: 'salary', amount: 300 },
    { id: 3, text: 'book', amount: -10 },
    { id: 4, text: 'camera', amount: 150 },
]

// 1Q - TOTAL EXPENSES  AND TOTAL INCOME
// TOTAL EXPENSE
// const amounts = transcations.map(transcation => transcation.amount)
// const spent = amounts.filter(amount => amount < 0)
// const totalSpent = spent.reduce((a, b) => a + b)
// console.log(totalSpent)

// TOTAL EXPENSE 1 LINE
// const expenses = transcations.map(transcation => transcation.amount).filter(amount => amount < 0).sort((a, b) => a - b)
// console.log(expenses)

// 1Q - TOTAL INCOME
// const income = amounts.filter(amount => amount > 0)
// const totalIncome = income.reduce((a, b) => a + b)
// console.log(totalIncome)

// TOTAL INCOME - 1 LINE
// const income = transcations.map(transcation => transcation.amount).filter(amount => amount > 0).reduce((a, b) => a + b)
// console.log(income)


// 2Q - MOST EXPENSIVE AND MOST INCOME
// const expenses = transcations.map(transcation => transcation.amount)
// const mostExpensive = expenses.sort((a, b) => a - b)
// console.log(mostExpensive);
// console.log('most expensive : ' + expenses[0])
// console.log('most income :' + expenses[expenses.length - 1])

// const mostExpense = transcations.map(transcation => transcation.amount).sort((a, b) => a - b)
// console.log(mostExpense[0])
// const mostIncome = transcations.map(transcation => transcation.amount).sort((a, b) => a - b)
// console.log(mostIncome[mostIncome.length - 1])









// 3Q - EVEN AND ODD INDEX ARRAY ELEMENTS
// const evenIndex = transcations.filter( (transcation , index) => index % 2===0)
// console.log(evenIndex);
// const oddIndex = transcations.filter( (transcation , index) => index % 2!==0)
// console.log(oddIndex);


// 4Q - ACCEPTS AN ID AND PRINT THE AMOUNT OF THAT ID
// transcations.filter(transcation => { transcation.id === 4 ? console.log(transcation.amount) : 0 })

// 5Q - CREATE A FUNCTION WHICH TAKES A TRANSCATION ARRAY AND RETURNS TOTAL AMOUNT SPEND AND RECEIVED AND CHECK IF ANY DEBT

// const calculateDebt = transcations => {

//     const totalIncome = transcations.map(transcation => transcation.amount).filter(amount => amount > 0).reduce((a, b) => a + b)

//     const totalExpenses = transcations.map(transcation => transcation.amount).filter(amount => amount < 0).reduce((a, b) => a + b)

//     let inDebt
//     totalExpenses + totalIncome < 0 ? inDebt = true : inDebt = false

//     const myObj = {
//         expense: totalExpenses,
//         income: totalIncome,
//         debt: inDebt
//     }
//     return myObj
// }
// const answer = calculateDebt(transcations)
// console.log(answer)

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2001, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

// 1Q - FIND ALL THE RETAIL COMPANIES
// const retailCompany = companies.filter(company => company.category === 'Retail')
// console.log(retailCompany)


// 2Q - NAMES OF ALL THE COMPANIES WHICH ARE FINANCE COMPANIES
// const nameOfFinanceCompany = companies.filter(company => company.category === 'Finance').map(company => company.name)
// console.log(nameOfFinanceCompany)


// 3Q - FIND THE AGE OF THE EACH COMAPANY
// const allCompanyAges = companies.map(company => company.end - company.start)
// console.log(allCompanyAges)


// 4Q - FIND THE COMBINED AGE OF ALL THE COMAPANIES
// const combinedAges = companies.map(company => company.end - company.start).reduce((a, b) => a + b)
// console.log(combinedAges)


// 5Q - COMBINED AGE OF FINANCE RETAIL AND TECHNOLOGY COMAPANIES
// const retailCompanyAge = companies.filter(company => company.category === 'Retail').map(age => age.end - age.start).reduce((a, b) => a + b, 0)
// console.log(retailCompanyAge)
// const financeCompanyAge = companies.filter(company => company.category === 'Finance').map(age => age.end - age.start).reduce((a, b) => a + b)
// console.log(financeCompanyAge)
// const technologyCompanyAge = companies.filter(company => company.category === 'Technology').map(age => age.end - age.start).reduce((a, b) => a + b)
// console.log(technologyCompanyAge)
// const totalAges = retailCompanyAge + financeCompanyAge + technologyCompanyAge
// console.log(totalAges)


// 6Q - FIND ALL THE 80S COMAPANIES
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1990)
// console.log(eightiesCompanies)


// 7Q - FIND THE NAME OF EACH COMPANY WHOSE AGE IS  MORE THAN 50 YEARS
// const companyAges = companies.filter(company => (company.end - company.start) > 50).map(companyName => companyName.name)
// console.log(companyAges)