//* TypeScript Tuples
//* Typed Arrays
//  tuple เป็น array ที่มีความยาวและประเภทที่กำหนดไว้ล่วงหน้าสำหรับแต่ละ index
{
  // define our tuple
  let ourTuple: [number, boolean, string];

  // initialize correctly เริ่มต้นอย่างถูกต้อง
  ourTuple = [5, false, "Coding God was here"];

  // ถ้าลำดับไม่ถูกต้อง จะเกิด error
  // ourTuple = [false, 'Coding God was mistaken', 5];
}

//* Readonly Tuple, Tuple แบบอ่านอย่างเดียว
//  คีย์เวิร์ด readonly สามารถป้องกันไม่ให้ Tuple เปลี่ยนแปลงได้
{
  // define our readonly tuple
  const ourReadonlyTuple: readonly [number, boolean, string] = [
    5,
    true,
    "The Real Coding God",
  ];

  // throws error เนื่องจากเป็นแบบอ่านอย่างเดียว
  // ourReadonlyTuple.push('Coding God took a day off');
}

//* Named Tuples ชื่อทูเพิลส์
//  Named Tuples ช่วยให้เราสามารถให้บริบทสำหรับค่าของเราในแต่ละดัชนี
{
    const graph: [x: number, y: number] = [55.2, 41.3];
}

//* Destructuring Tuples
//  เนื่องจากทูเพิลเป็นอาร์เรย์ เราจึงสามารถทำลายพวกมันได้
{
    const graph: [number, number] = [55.2, 41.3];
    const [x, y] = graph;
}