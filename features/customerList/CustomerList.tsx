import { fetchCustomers } from "@/api/fetchCustomers";
import { CustomerItem } from "../customerItem/CustomerItem";
import styles from "./CustomerList.module.scss";
import { ICustomerListProps } from "./ICustomerListProps";

export default async function CustomerList(props: ICustomerListProps) {
  const customers = await fetchCustomers(2000);

  const content = customers.map((customer) => (
    <CustomerItem key={customer.id} customer={customer} />
  ));

  return (
    <div className={styles.customerList}>
      <div>{props.title}</div>
      <div>{content}</div>
    </div>
  );
}