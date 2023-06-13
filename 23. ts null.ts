//* TypeScript Null & Undefined
//* Types 
//  null and undefined ใช้ได้เหมือนประเภทอื่นๆ เช่น string
{
    let value: string | undefined | null = null;
    console.log(typeof value); //object
    
    value = 'hello';
    console.log(typeof value); //string
    
    value = undefined;
    console.log(typeof value); //undefined

    value = null;
    console.log(typeof value); //object
}

//* Optional Chaining การผูกมัดเพิ่มเติม
//  เป็นคุณสมบัติ JavaScript ที่ทำงานได้ดีกับการจัดการค่าว่างของ TypeScript
//  อนุญาตให้เข้าถึงคุณสมบัติบนวัตถุ
//  ที่อาจมีหรือไม่มีก็ได้ ด้วยไวยากรณ์ที่กะทัดรัด
//  สามารถใช้กับ ?. เมื่อเข้าถึงคุณสมบัติ
{
    interface House {
        sqft: number;
        yard?: {
          sqft: number;
        };
    }
                  
    function printYardSize(house: House) {
        const yardSize = house.yard?.sqft;
      
        if (yardSize === undefined) {
          console.log('No yard');
        } else {
          console.log(`Yard is ${yardSize} sqft`);
        }
    }
                  
    let home: House = {
        sqft: 500
    };
                  
    printYardSize(home); // Prints 'No yard'
}

//* Nullish Coalescence
//  เป็นคุณสมบัติ JavaScript ที่ทำงานได้ดีกับการจัดการค่าว่างของ TypeScript
//  ช่วยให้มีทางเลือกสำรองโดยเฉพาะเมื่อต้องจัดการกับ null หรือ undefined
//  สิ่งนี้มีประโยชน์เมื่อค่าเท็จอื่นๆ อาจเกิดขึ้นในนิพจน์แต่ยังคงใช้ได้
//  สามารถใช้กับ ?? ในนิพจน์ คล้ายกับการใช้ &&
{
    function printMileage(mileage: number | null | undefined) {
        console.log(`Mileage: ${mileage ?? 'Not Available'}`);
    }
                  
    printMileage(null); // Prints 'Mileage: Not Available'
      
    printMileage(0); // Prints 'Mileage: 0'
}

//* Null Assertion
//  บางครั้งเหมาะที่จะเพิกเฉยต่อค่าที่จะเป็น null หรือ undefined
//  วิธีง่ายๆ ในการทำเช่นนี้คือการใช้การแคสต์
//  แต่ TypeScript ยังให้ ! เป็นทางลัดที่สะดวก
{
    function getValue(): string | undefined {
        return 'hello';
      }
                  
    let value = getValue();
    console.log('value length: ' + value!.length); 
    // value length: 5
}

//* Array bounds handling การจัดการขอบเขตของอาร์เรย์
{
    let array: number[] = [1, 2, 3];
    let value = array[0];
    // with `noUncheckedIndexedAccess` this has the type `number | undefined`
}