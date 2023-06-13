//* TypeScript Arrays
//  TypeScript มีไวยากรณ์เฉพาะสำหรับการพิมพ์อาร์เรย์
{
    const names: string[] = [];
    names.push("Dylan"); // no error
    // names.push(3); //error: argument string ไม่สามารถกำหนดเป็น number ได้
}

//* Readonly สำหรับอ่านเท่านั้น
//  คีย์เวิร์ด readonly สามารถป้องกันไม่ให้อาร์เรย์เปลี่ยนแปลงได้
{
    const names: readonly string[] = ["Dylan"];
    // names.push("Jack"); 
    // error: ไม่มีคุณสมบัติ push ใน readonly string[];
}

//* Type Inference (อนุมาน)
//  TypeScript สามารถสรุปประเภทของอาร์เรย์ได้หากมีค่า
{
    const numbers = [1, 2, 3]; // inferred to type number[]
    numbers.push(4); // no error
    // numbers.push("2"); error: argument number ไม่สามารถกำหนดเป็น string ได้
    let head: number = numbers[0]; // no error
    console.log(head); //1
}