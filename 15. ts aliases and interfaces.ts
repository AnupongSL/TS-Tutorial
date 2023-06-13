//* TypeScript Type Aliases and Interfaces
//  TypeScript อนุญาตให้กำหนดประเภทแยกต่างหากจากตัวแปรที่ใช้

//* Type Aliases
//  ประเภทนามแฝงอนุญาตให้กำหนดประเภทด้วยชื่อที่กำหนดเอง (Alias)
//  Type Aliases สามารถใช้กับคำดั้งเดิมเช่น string 
//  หรือประเภทที่ซับซ้อนขึ้นเช่น objects and arrays
{
    type CarYear = number;
    type CarType = string;
    type CarModel = string;
    type Car = {
      year: CarYear,
      type: CarType,
      model: CarModel
    };
    
    const carYear: CarYear = 2001
    const carType: CarType = "Toyota"
    const carModel: CarModel = "Corolla"
    const car: Car = {
      year: carYear,
      type: carType,
      model: carModel
    };
    
    console.log(car);  
    // { year: 2001, type: 'Toyota', model: 'Corolla' }
}

//* Interfaces
//  อินเทอร์เฟซคล้ายกับนามแฝงประเภท แต่ใช้กับประเภทวัตถุเท่านั้น
{
    interface Rectangle {
        height: number,
        width: number
    };
      
    const rectangle: Rectangle = {
        height: 20,
        width: 10
    };
      
    console.log(rectangle);
    // { height: 20, width: 10 }
}

//* Extending Interfaces การขยาย Interfaces
//  การขยายอินเทอร์เฟซหมายความว่าคุณกำลังสร้างอินเทอร์เฟซใหม่
//  ด้วยคุณสมบัติเท่าเดิมบวกกับสิ่งใหม่ๆ
{
    // interface เดิม
    interface Rectangle {
        height: number,
        width: number
    }
    
    // interface ใหม่
    interface ColoredRectangle extends Rectangle {
        color: string
    }
      
    const coloredRectangle: ColoredRectangle = {
        height: 20,
        width: 10,
        color: "red"
    };
      
    console.log(coloredRectangle);
    // { height: 20, width: 10, color: 'red' }
}