import { UserForm } from "@/modules/dashboard/components/UserForm";
import { UserList } from "@/modules/dashboard/components/UserList";

export const Dashboard = () => {
  return (
    <main className="max-w-xl mx-auto mt-10 space-y-8">
      <h1 className="text-2xl font-bold">User Management</h1>
      <UserForm />
      <UserList />
    </main>
  );
};
