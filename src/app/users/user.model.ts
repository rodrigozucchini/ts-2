import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

//CON READONLY EVITAS SOBREESCRITURA
export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
