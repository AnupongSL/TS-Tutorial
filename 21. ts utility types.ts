//* TypeScript Utility Types
//  TypeScript มาพร้อมกับประเภทจำนวนมากที่สามารถช่วยในการจัดการประเภททั่วไป
//  มักจะเรียกว่าประเภทยูทิลิตี้

//* Partial บางส่วน
//  Partial เปลี่ยนคุณสมบัติทั้งหมดในวัตถุให้เป็นทางเลือก
{
    interface Point {
        x: number;
        y: string;
      }
                  
    let pointPart: Partial<Point> = {}; 
    // `Partial` อนุญาตให้ x และ y เป็นตัวเลือก
    pointPart.x = 10;
    pointPart.y = "hello";
    console.log(pointPart); // { x: 10, y: 'hello' }
}

//* Required ที่จำเป็น
//  Required เปลี่ยนคุณสมบัติทั้งหมดในวัตถุที่ต้องการ
{
    interface Car {
        make: string;
        model: string;
        mileage?: number;
    }
                  
    let myCar: Required<Car> = {
        make: 'Ford',
        model: 'Focus',
        mileage: 12000 // `Required` forces mileage to be defined
    };
      
    console.log(myCar);
    //  { make: 'Ford', model: 'Focus', mileage: 12000 }
}

//* Record บันทึก
//  Record เป็นทางลัดในการกำหนดประเภทวัตถุด้วยประเภทคีย์และประเภทค่าเฉพาะ
{
    const nameAgeMap: Record<string, number> = {
        'Alice': 21,
        'Bob': 25
    };
      
    console.log(nameAgeMap); // { Alice: 21, Bob: 25 }
}
//? Record<string, number> เทียบเท่ากับ { [key: string]: number }

//* Omit ละเว้น
//  Omit ลบคีย์ออกจากประเภทวัตถุ
{
    interface Person {
        name: string;
        age: number;
        location?: string;
      }
          
      const bob: Omit<Person, 'age' | 'location'> = {
        name: 'Bob'
        // `Omit` ได้ลบอายุและตำแหน่งออกจากประเภทและไม่สามารถระบุได้ที่นี่
      };
      
    console.log(bob); // { name: 'Bob' }
}

//* Pick เลือก
//  Pick ลบทั้งหมดยกเว้นคีย์ที่ระบุจากประเภทวัตถุ
{
    interface Person {
        name: string;
        age: number;
        location?: string;
    }
                  
    const bob: Pick<Person, 'name'> = {
        name: 'Bob'
        // `Pick` เก็บไว้เพียงชื่อ
        // ดังนั้นอายุและสถานที่จึงถูกลบออกจากประเภทและไม่สามารถระบุได้ที่นี่
    };
      
    console.log(bob); // { name: 'Bob' }
}

//* Exclude ไม่รวม
//  Exclude ลบประเภทออกจาก Union
{
    type Primitive = string | number | boolean;

    const value: Exclude<Primitive, string> = true;
    // ไม่สามารถใช้สตริงที่นี่ได้เนื่องจาก Exclude ลบออกจากประเภท
    
    console.log(typeof value); // boolean.
}

//* ReturnType
//  ReturnType แยกประเภทการส่งคืนของประเภทฟังก์ชัน
{
    type PointGenerator = () => { x: number; y: number; };

    const point: ReturnType<PointGenerator> = {
      x: 10,
      y: 20
    };    
}

//* Parameters
//  Parameters แยกประเภทพารามิเตอร์ของประเภทฟังก์ชันเป็นอาร์เรย์
{
    type PointPrinter = (p: { x: number; y: number; }) => void;
    const point: Parameters<PointPrinter>[0] = {
      x: 10,
      y: 20
    };
}