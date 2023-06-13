//* Create Object
const person1 = {
    name: "anupong",
    age: 22
}
const person2:{name:string,age:number} = {name:"dew",age:20}
const position: {lat:number,long:number} = {lat:70,long:25}

//* รับค่า Object

const showDetail = (data:{name:string,age:number}) => {
    console.log(`name: ${data.name}, age: ${data.age}`);
}

showDetail(person1) //name: anupong, age: 22
showDetail(person2) //name: dew, age: 20