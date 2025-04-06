import { UserForm } from "@/components/UserForm";
import { UserList } from "@/components/UserList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-10 space-y-8">
      <h1 className="text-2xl font-bold">User Management</h1>
      <UserForm />
      <UserList />
    </main>
  );
}
