//* TypeScript Functions
//  TypeScript มีไวยากรณ์เฉพาะสำหรับการพิมพ์พารามิเตอร์ของฟังก์ชันและส่งคืนค่า

//* Return Type
//  ประเภทของค่าที่ส่งคืนโดยฟังก์ชันสามารถกำหนดได้อย่างชัดเจน
{
  // number ที่นี่ระบุว่าฟังก์ชันนี้ส่งคืนตัวเลข
  function getTime(): number {
    return new Date().getTime();
  }
  console.log(getTime()); // 1648464745471
}

//* Void Return Type
//  สามารถใช้ประเภท void เพื่อระบุว่าฟังก์ชันไม่ส่งคืนค่าใดๆ
{
  function printHello(): void {
    console.log("Hello!");
  }
  printHello(); //Hello!

  // มีหรือไม่มี void ก็ได้
  function printHello1() {
    console.log("Hello2!");
  }
  printHello1(); //Hello2!
}

//* Parameters
//  พารามิเตอร์ของฟังก์ชันพิมพ์ด้วยไวยากรณ์ที่คล้ายกับการประกาศตัวแปร
{
  function multiply(a: number, b: number) {
    return a * b;
  }

  console.log(multiply(2, 5)); // 10
}

//* Optional Parameters พารามิเตอร์ทางเลือก
//  ตามค่าเริ่มต้น TypeScript จะถือว่าพารามิเตอร์ทั้งหมดจำเป็น
//  แต่สามารถทำเครื่องหมายอย่างชัดเจนว่าไม่บังคับ
{
  //  ตัวดำเนินการ `?` ที่นี่ทำเครื่องหมายพารามิเตอร์ `c` เป็นตัวเลือก
  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  console.log(add(2, 5)); // 7
}

//* Default Parameters พารามิเตอร์เริ่มต้น
//  สำหรับพารามิเตอร์ที่มีค่าเริ่มต้น ค่าเริ่มต้นจะอยู่หลังคำอธิบายประกอบประเภท
{
  // กำหนดให้ exponent มีค่าเริ่มต้น = 2
  function pow(value: number, exponent: number = 2) {
    return value ** exponent;
  }

  console.log(pow(10)); // 100
}

//* Named Parameters ชื่อพารามิเตอร์
{
  function divide({
    dividend,
    divisor,
  }: {
    dividend: number;
    divisor: number;
  }) {
    return dividend / divisor;
  }

  console.log(divide({ dividend: 10, divisor: 2 })); //5
}

//* Rest Parameters พารามิเตอร์ส่วนที่เหลือ
//  พารามิเตอร์ที่เหลือสามารถพิมพ์ได้เหมือนพารามิเตอร์ปกติ
//  แต่ประเภทต้องเป็นอาร์เรย์เนื่องจากพารามิเตอร์ที่เหลือเป็นอาร์เรย์เสมอ
{
    function add1(a: number, b: number, ...rest: number[]) {
        return a + b + rest.reduce((p, c) => p + c, 0);
      }
      
    console.log(add1(10,10,10,10,10)); //50
}

//* Type Alias
//  สามารถระบุประเภทฟังก์ชันแยกต่างหากจากฟังก์ชันที่มีนามแฝงประเภท
{
    type Negate = (value: number) => number;
    const negateFunction: Negate = (value) => value * -1;
    
    console.log(negateFunction(10)); //-10
}