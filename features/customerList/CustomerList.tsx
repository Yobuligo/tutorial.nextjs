import { CustomerItem } from "../customerItem/CustomerItem";
import styles from "./CustomerList.module.scss";
import { ICustomerListProps } from "./ICustomerListProps";

export const CustomerList: React.FC<ICustomerListProps> = (props) => {
  const content = props.customers.map((customer) => (
    <CustomerItem key={customer.id} customer={customer} />
  ));

  return <div className={styles.customerList}>{content}</div>;
};
