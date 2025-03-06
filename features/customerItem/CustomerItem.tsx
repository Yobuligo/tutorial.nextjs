import React from "react";
import { ICustomerItemProps } from "./ICustomerItemProps";

export const CustomerItem: React.FC<ICustomerItemProps> = (props) => {
  return (
    <div>
      <div>{props.customer.firstname}</div>
      <div>{props.customer.lastname}</div>
    </div>
  );
};
