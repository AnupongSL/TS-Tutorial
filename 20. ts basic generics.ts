//* TypeScript Basic Generics TypeScript พื้นฐานทั่วไป
//  Generics อนุญาตให้สร้าง 'type variables' ซึ่งสามารถใช้สร้างคลาสได้
//  functions & type aliases ที่ไม่จำเป็นต้องกำหนดประเภทที่ใช้อย่างชัดเจน
//  Generics ทำให้ง่ายต่อการเขียนโค้ดที่ใช้ซ้ำได้

//* Functions
//  Generics ที่มีฟังก์ชั่นช่วยให้วิธีการทั่วไปมากขึ้น
//  ซึ่งแสดงถึงประเภทที่ใช้และส่งคืนได้แม่นยำยิ่งขึ้น
{
  function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }

  console.log(createPair<string, number>("hello", 42)); // ['hello', 42]
}

//* Classes
//  สามารถใช้ Generics เพื่อสร้างคลาสทั่วไป เช่น Map
{
  class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
      this._value = value;
    }

    public getValue(): T | undefined {
      return this._value;
    }

    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }

  const value = new NamedValue<number>("myNumber");

  value.setValue(10);
  console.log(value.toString()); // myNumber: 10
}

//* Type Aliases
//  Generics in type aliases อนุญาตให้สร้างประเภทที่ใช้ซ้ำได้มากขึ้น
{
  type Wrapped<T> = { value: T };
  const wrappedValue: Wrapped<number> = { value: 10 };
}

//* Default Value
//  Generics สามารถกำหนดค่าเริ่มต้นซึ่งนำไปใช้ถ้าไม่มีการระบุหรืออนุมานค่าอื่น
{
  class NamedValue<T = string> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
      this._value = value;
    }

    public getValue(): T | undefined {
      return this._value;
    }

    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }

  let value = new NamedValue("myNumber");
  value.setValue("myValue");
  console.log(value.toString()); // myNumber: myValue
}

//* Extends ขยาย
{
  function createLoggedPair<
    S extends string | number,
    T extends string | number
  >(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }
}