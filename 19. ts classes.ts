//* TypeScript Classes
//* Members: Types
{
  class Person {
    name: string;
  }

  const person = new Person();
  person.name = "Jane";

  console.log(person); // Person { name: 'Jane' }
}

//* Members: Visibility การมองเห็น
//  สมาชิกในชั้นเรียนยังได้รับการดัดแปลงพิเศษซึ่งส่งผลต่อการมองเห็น
//  public (ค่าเริ่มต้น) อนุญาตให้เข้าถึงสมาชิก class ได้จากทุกที่
//  private อนุญาตให้เข้าถึงสมาชิก class จากภายใน class เท่านั้น
//  protected อนุญาตให้เข้าถึงสมาชิก class จากตัวมันเอง
//  และ class ใด ๆ ที่สืบทอดมา ซึ่งครอบคลุมในส่วนมรดกด้านล่าง
{
  class Person {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("Jane");
  console.log(person.getName()); // Jane
  // person.name ไม่สามารถเข้าถึงได้จากภายนอก class เนื่องจากเป็นส่วนตัว
}

//* Parameter Properties คุณสมบัติพารามิเตอร์
//  TypeScript ให้วิธีที่สะดวกในการกำหนดสมาชิกคลาสในคอนสตรัคเตอร์
//  โดยการเพิ่มตัวแก้ไขการมองเห็นให้กับพารามิเตอร์
{
  class Person {
    // ชื่อเป็นตัวแปรสมาชิกส่วนตัว
    public constructor(private name: string) {}

    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("Jane");
  console.log(person.getName()); // Jane
}

//* Readonly อ่านเท่านั้น
//  คล้ายกับอาร์เรย์
//  คำหลักแบบอ่านอย่างเดียวสามารถป้องกันไม่ให้สมาชิกใน class ถูกเปลี่ยน
{
  class Person {
    private readonly name: string;

    public constructor(name: string) {
      // ชื่อไม่สามารถเปลี่ยนแปลงได้หลังจากคำจำกัดความเริ่มต้นนี้
      // ซึ่งจะต้องอยู่ที่การประกาศหรือในตัวสร้าง
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("Jane");
  console.log(person.getName());
}

//* Inheritance: Implements
//  สามารถใช้อินเทอร์เฟซเพื่อกำหนดประเภทที่คลาสต้องติดตามผ่าน implements
{
  interface Shape {
    getArea: () => number;
  }

  class Rectangle implements Shape {
    public constructor(
      protected readonly width: number,
      protected readonly height: number
    ) {}

    public getArea(): number {
      return this.width * this.height;
    }
  }

  const myRect = new Rectangle(10, 20);

  console.log(myRect.getArea()); // 200
}

//* Inheritance: Extends
//  class สามารถขยายซึ่งกันและกันผ่านทาง extends
//  class สามารถขยาย class อื่นได้เพียง class เดียวเท่านั้น
{
  interface Shape {
    getArea: () => number;
  }

  class Rectangle implements Shape {
    public constructor(
      protected readonly width: number,
      protected readonly height: number
    ) {}

    public getArea(): number {
      return this.width * this.height;
    }
  }

  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
    // getArea gets inherited from Rectangle
  }

  const mySq = new Square(20);

  console.log(mySq.getArea()); // 400
}

//* Override แทนที่
//  เมื่อคลาสขยายคลาสอื่น
//  คลาสนั้นสามารถแทนที่สมาชิกของคลาสพาเรนต์ด้วยชื่อเดียวกัน
//  TypeScript เวอร์ชันใหม่กว่าอนุญาตให้ทำเครื่องหมายสิ่งนี้อย่างชัดเจนด้วย
//  override
{
  interface Shape {
    getArea: () => number;
  }

  class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(
      protected readonly width: number,
      protected readonly height: number
    ) {}

    public getArea(): number {
      return this.width * this.height;
    }

    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }

  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }

  const mySq = new Square(20);

  console.log(mySq.toString()); // Square[width=20]
}

//* Abstract Classes
//  คลาสสามารถเขียนในลักษณะที่อนุญาตให้ใช้เป็นคลาสพื้นฐานสำหรับคลาสอื่น ๆ
//  โดยไม่ต้องใช้สมาชิกทั้งหมด
{
  abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }

  class Rectangle extends Polygon {
    public constructor(
      protected readonly width: number,
      protected readonly height: number
    ) {
      super();
    }

    public getArea(): number {
      return this.width * this.height;
    }
  }

  const myRect = new Rectangle(10, 20);
  console.log(myRect.getArea()); // 200
}