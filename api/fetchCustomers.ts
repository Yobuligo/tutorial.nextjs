import { ICustomer } from "@/shared/models/ICustomers";

export const fetchCustomers = async (
  delayInMilliseconds?: number
): Promise<ICustomer[]> => {
  if (delayInMilliseconds) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(""), delayInMilliseconds)
    );
  }

  const response = await fetch("http://localhost:5000/customers");

  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    return [];
  }
};
