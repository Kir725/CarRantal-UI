export class LegalClientModel {

  private _id?: number;

  private _name: string;

  private _clientType: string;

  private _type: string;

  private _phone: number;

  private _email: string;

  private _agent: string;

  private _organizationCode: string;

  constructor() {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get clientType(): string {
    return this._clientType;
  }

  set clientType(value: string) {
    this._clientType = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get phone(): number {
    return this._phone;
  }

  set phone(value: number) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get agent(): string {
    return this._agent;
  }

  set agent(value: string) {
    this._agent = value;
  }

  get organizationCode(): string {
    return this._organizationCode;
  }

  set organizationCode(value: string) {
    this._organizationCode = value;
  }
}
