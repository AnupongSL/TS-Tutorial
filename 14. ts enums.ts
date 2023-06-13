//* TypeScript Enums
//  enum เป็น "คลาส" พิเศษที่แสดงถึงกลุ่มของค่าคงที่ (เปลี่ยนแปลงไม่ได้)

//* Numeric Enums - Default, ตัวเลข - ค่าเริ่มต้น
//  ตามค่าเริ่มต้น enums จะเริ่มต้นค่าแรกเป็น 0 และเพิ่มทีละ 1
{
    enum CardinalDirections {
        North, //0
        East,  //1
        South, //2
        West   //3
    }
    console.log(CardinalDirections.North); //1
    console.log(CardinalDirections.East);  //2
    console.log(CardinalDirections.South); //3
    console.log(CardinalDirections.West);  //4

    let currentDirection = CardinalDirections.North;
    console.log(currentDirection); //0
    //  throws error as 'North' is not a valid enum
    //  currentDirection = 'North'; // Error
}

//* Numeric Enums - Initialized ตัวเลข - เริ่มต้น
{
    enum CardinalDirections {
        North = 1,
        East,
        South,
        West
    }
    // logs 1
    console.log(CardinalDirections.North);
    // logs 4
    console.log(CardinalDirections.West);
}

//* Numeric Enums - Fully Initialized
{
    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
    }
    // logs 404
    console.log(StatusCodes.NotFound);
    // logs 200
    console.log(StatusCodes.Success);
}

//* String Enums
//  Enums ยังสามารถมี String
{
    enum CardinalDirections {
        North = 'North',
        East = "East",
        South = "South",
        West = "West"
    };
    // logs "North"
    console.log(CardinalDirections.North);
    // logs "West"
    console.log(CardinalDirections.West);
}