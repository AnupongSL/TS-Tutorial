//* TypeScript Object Types ประเภทวัตถุ TypeScript
//  TypeScript มีไวยากรณ์เฉพาะสำหรับการพิมพ์วัตถุ
{
    const car: { type: string, model: string, year: number } = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };
      
    console.log(car); 
    // { type: 'Toyota', model: 'Corolla', year: 2009 }
    // Object ประเภทนี้สามารถเขียนแยกกันได้ และนำมาใช้ซ้ำได้
}

//* Type Inference (อนุมาน)
//  TypeScript สามารถสรุปประเภทของคุณสมบัติตามค่าของมัน
{
    const car = {
        type: "Toyota",
    };
    car.type = "Ford"; // no error
    // car.type = 2;
    // error: 'number' ไม่สามารถกำหนดให้เป็น 'string' 
}

//* Optional Properties คุณสมบัติทางเลือก
//  คือ คุณสมบัติที่ไม่จำเป็นต้องกำหนดไว้ในนิยามของวัตถุ
{
    // error เนื่องจากไม่ได้กำหนด Optional Properties
    // const car: { type: string, mileage: number } = {  
    //     type: "Toyota",
    // };
    // car.mileage = 2000;

    // กำหนด Optional Properties เพิ่ม ?
    const car: { type: string, mileage?: number } = {  
        type: "Toyota",
    };
    car.mileage = 2000;
}

//* Index Signatures
//  สามารถใช้สำหรับวัตถุที่ไม่มีรายการคุณสมบัติที่กำหนดไว้
{
    const nameAgeMap: { [index: string]: number } = {};
    nameAgeMap.Jack = 25; // no error
    // nameAgeMap.Mark = "Fifty";
    // error: 'number' ไม่สามารถกำหนดให้เป็น 'string' 
}