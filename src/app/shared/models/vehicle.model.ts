export class VehicleModel {

  private _id: number;

  private _regPlate: string;

  private _model: string;

  private _make: string;

  private _vehicleClass: string;

  private _type: string;

  private _color: string;

  private _issueYear: number;

  private _insuranceCost: number;

  private _capacity: number;

  private _rentalCostPerDay: number;

  private _bail: number;

  private _rented: boolean;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get regPlate(): string {
    return this._regPlate;
  }

  set regPlate(value: string) {
    this._regPlate = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get make(): string {
    return this._make;
  }

  set make(value: string) {
    this._make = value;
  }

  get vehicleClass(): string {
    return this._vehicleClass;
  }

  set vehicleClass(value: string) {
    this._vehicleClass = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get issueYear(): number {
    return this._issueYear;
  }

  set issueYear(value: number) {
    this._issueYear = value;
  }

  get insuranceCost(): number {
    return this._insuranceCost;
  }

  set insuranceCost(value: number) {
    this._insuranceCost = value;
  }

  get capacity(): number {
    return this._capacity;
  }

  set capacity(value: number) {
    this._capacity = value;
  }

  get rentalCostPerDay(): number {
    return this._rentalCostPerDay;
  }

  set rentalCostPerDay(value: number) {
    this._rentalCostPerDay = value;
  }

  get bail(): number {
    return this._bail;
  }

  set bail(value: number) {
    this._bail = value;
  }

  get rented(): boolean {
    return this._rented;
  }

  set rented(value: boolean) {
    this._rented = value;
  }
}
