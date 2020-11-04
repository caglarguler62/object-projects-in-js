const bmia = {
  fullName: 'Mark Miller',
  mass: 180,
  height: 2,
  calcBMI: function (){
    return this.mass / (this.height * this.height)
  }
}



const bmib = {
  fullName: 'John Smith',
  mass: 100,
  height: 2.1,
  calcBMI: function (){
    return this.mass / (this.height * this.height)
  }
}


function z() {if(bmia.calcBMI() > bmib.calcBMI()){
  return `${bmia.fullName}'s bmi ${bmia.calcBMI()} is higher than ${bmib.fullName}' bmi ${bmib.calcBMI()}`
}
}

console.log(z())

