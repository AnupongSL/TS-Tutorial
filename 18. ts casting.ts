//* TypeScript Casting
//  การแคสต์เป็นกระบวนการแทนที่ประเภท

//* Casting with as
//  วิธีง่ายๆ ในการส่งตัวแปรคือการใช้ as
//  ซึ่งจะเปลี่ยนประเภทของตัวแปรที่กำหนดโดยตรง
{
    let x: unknown = 'hello';
    console.log((x as string).length); // 5
}

//* Casting with <> 
//  การใช้ <> ทำงานเหมือนกับการแคสต์ด้วย as
{
    let x: unknown = 'hello';
    console.log((<string>x).length); // 5
}

//* Force casting
{
    let x = 'hello';
    console.log(((x as unknown) as string).length); // 5
}