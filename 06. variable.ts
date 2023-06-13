//* การนิยามตัวแปร
//* Type Assignment
//  เมื่อสร้างตัวแปร มีสองวิธีหลักในการกำหนด TypeScript
//  const , let ชื่อตัวแปร : ชนิดข้อมูล = ค่าเริ่มต้น
//  Explicit Type ประเภทที่ชัดเจน
{
    let fname:string = "Anupong"
    let age:number = 30;
    let isWorking:boolean = false;
}
//  การกำหนดประเภทอย่างชัดเจนนั้นอ่านง่ายกว่าและมีความตั้งใจมากกว่า


//  Implicit Type
//  Implicit - TypeScript จะ "เดา" ประเภทตามค่าที่กำหนด
{
    let fname = "Anupong" //string
    let age = 30; //number
    let isWorking = false; //boolean
}