//* TypeScript Keyof
//  keyof เป็นคำหลักใน TypeScript ซึ่งใช้เพื่อแยกประเภทคีย์ออกจากประเภทวัตถุ

//* keyof with explicit keys
//  เมื่อใช้กับประเภทวัตถุที่มีคีย์ชัดเจน
//  keys สร้างประเภท union ด้วยคีย์เหล่านั้น
{
  interface Person {
    name: string;
    age: number;
  }

  // `keyof Person` ที่นี่สร้างประเภท union ของ "ชื่อ" และ "อายุ"
  //  ไม่อนุญาตให้ใช้สตริงอื่น
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Person property ${property}: "${person[property]}"`);
    // Person property name: "Max"
  }

  let person = {
    name: "Max",
    age: 27,
  };

  printPersonProperty(person, "name");
  // Printing person property name: "Max"s
}

//* keyof with index signatures
//  keyof สามารถใช้กับลายเซ็นดัชนีเพื่อแยกประเภทดัชนี
{
  type StringMap = { [key: string]: unknown };
  // `keyof StringMap` resolves to `string` here
  function createStringPair(
    property: keyof StringMap,
    value: string
  ): StringMap {
    return { [property]: value };
  }
}