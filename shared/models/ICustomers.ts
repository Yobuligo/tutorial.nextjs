import { IEntity } from "@/shared/IEntity";

export interface ICustomer extends IEntity {
  firstname: string;
  lastname: string;
}
