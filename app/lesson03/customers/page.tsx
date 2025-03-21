import CustomerList from "@/features/customerList/CustomerList";
import { Suspense } from "react";

export default async function CustomersPage() {
  return (
    <div>
      <h3>Customers</h3>
      <Suspense fallback={<h1>...Loading</h1>}>
        <CustomerList title="Customers" />
      </Suspense>
    </div>
  );
}
