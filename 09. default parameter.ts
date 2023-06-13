//* Default Parameter
//  เป็นการสร้าง function โดยกำหนดค่าเริ่มต้นให้กับ parameter

const showEmployee = (name:string,age:number,address:string="กทม") => {
    console.log(`name: ${name}, age: ${age}, address: ${address}`);
}

showEmployee("เอก",22,"พะเยา") // name: เอก, age: 22, address: พะเยา 
showEmployee("ดิว",20) // name: ดิว, age: 20, address: กทม 
showEmployee("พอน",30,"ระยอง") // name: พอน, age: 30, address: ระยอง 