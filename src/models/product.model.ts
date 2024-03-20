export class Product {
  constructor(
    private _code: string,
    private _description: string,
    private _value: number,
    private _createdAt: Date,
  ) {}

  public get code(): string {
    return this._code;
  }

  public get description(): string {
    return this._description;
  }

  public get value(): number {
    return this._value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public toJSON() {
    return {
      code: this._code,
      description: this.description,
      value: this._value,
      createdAt: this._createdAt,
    };
  }
}
