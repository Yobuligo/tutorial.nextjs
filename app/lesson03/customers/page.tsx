import { fetchCustomers } from "@/api/fetchCustomers";
import { CustomerList } from "@/features/customerList/CustomerList";

export default async function CustomersPage() {
  const customers = await fetchCustomers(2000);

  return (
    <div>
      <h3>Customers</h3>
      <CustomerList customers={customers} />
    </div>
  );
}
