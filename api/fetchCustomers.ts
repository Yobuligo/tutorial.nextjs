import { ICustomer } from "@/shared/models/ICustomers";
import { uuid } from "@/utils/uuid";

export const fetchCustomers = async (
  delayInMilliseconds?: number
): Promise<ICustomer[]> => {
  if (delayInMilliseconds) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(""), delayInMilliseconds)
    );
  }

  const customers: ICustomer[] = [
    { id: uuid(), firstname: "Stacey", lastname: "Starfish" },
    { id: uuid(), firstname: "Alex", lastname: "Ant" },
    { id: uuid(), firstname: "Bertha", lastname: "Bear" },
  ];

  return customers;
};
