for (i of staff)
console.log(i)

for(let i of staff) {
  i.email = `${(i.lastName)}@coorparation.com`};
console.log(staff)

for ( i of staff){
  i.fullName = function(){
     let fullName = `${this.firstName}  ${this.lastName}`
    return fullName
  }
}
console.log(staff[1].fullName())

let a = staff.filter(item => item.age > 21)

console.log(a)

let c = staff.sort(function (a, b){ return a.experience - b.experience});

console.log(c)

let g = staff.reduce((accumulator, currentValue) =>
 (accumulator + currentValue.age), 0) / staff.length
console.log(g)

let z = staff.filter(item => item.language === 'Turkish' && item.isActive === true && item.age < 40).sort((item,b) => b.age - item.age)
// z.sort((a, b) => b.age - a.age)
console.log(z)