const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
// for (company of companies){
//   console.log(company)
// }

// companies.forEach(item => console.log(item.name))
companies.push({name: 'Company Ten', category: 'Food', start: 1988, end: 2020})

// console.log(companies)

 let a = companies.filter(item =>item.category === 'Retail')
console.log(a)
let b = companies.filter(item =>item.start < 1990)
console.log(b)

let c = companies.filter(items => items.end - items.start > 10)
console.log(c)

let d = companies.map(items => items.name)
console.log(d)
let e = companies.map(items => [items.name,  items.start, items.end])
console.log(e)
let f = companies.sort((a,b) => a.start-b.start)
console.log(f)

let g = companies.reduce((a,b) => a + (b.end - b.start), 0)

console.log(g)