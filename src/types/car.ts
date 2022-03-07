export interface IAddCarInfo {}

export interface ICarModel {
  brand: string;
  carModelId: number;
  energy: string;
  finition: string;
  fiscalPower: number;
  horsePower: number;
  kwPower: number;
  maintenancePlan: any;
  model: string;
  motor: string;
  transmissionType: string;
  typeRearBrake: string | null;
}

export interface ICar {
  averageMileagePerYear: 150000;
  carEntityId: 62;
  carModel: ICarModel | null;
  deleted: false;
  hasClim: true;
  immatriculationDate: string;
  lastDateMileage: string;
  lastMileageValidated: number;
  licencePlate: string;
  mileage: string;
  mileagePerDayEstimated: number;
  mileageWhenSubscribed: number;
  userDB: string | null;
  vin: string;
}
