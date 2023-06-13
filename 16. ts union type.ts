//* TypeScript Union Types
//  Union Types จะใช้เมื่อค่าสามารถเป็นได้มากกว่าประเภทเดียว

//* Union | (OR)
//  การใช้ | เรากำลังบอกว่าพารามิเตอร์ของเรา string หรือ number
{
    function printStatusCode(code: string | number) {
        console.log(`My status code is ${code}.`)
      }
      
      printStatusCode(404);    // My status code is 404.
      printStatusCode('404');  // My status code is 404.
}

//* Union Type Errors
{
    // function printStatusCode(code: string | number) {
    //     console.log(`My status code is ${code.toUpperCase()}.`)
    // }
    //  ไม่มีคุณสมบัติ 'toUpperCase' ในประเภท 'number'
}