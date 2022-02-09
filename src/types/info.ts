type gender = 'M' | 'F';

export interface PersonnalInfo {
  email: string;
  firstName: string;
  familyName: string;
  password: string;
  birthdate: string;
  gender: gender;
}

export interface ILoginInfo {
  email: string;
  password: string;
}
