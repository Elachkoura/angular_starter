export class Person {
  private _firstname: string = null;
  private _lastname: string = null;
  private _age: number = null;


  get firstname ():string {
    return this._firstname;
  }

  set firstname (value:string) {
    this._firstname = value;
  }

  get lastname ():string {
    return this._lastname;
  }

  set lastname (value:string) {
    this._lastname = value;
  }

  get age ():number {
    return this._age;
  }

  set age (value:number) {
    this._age = value;
  }
}