"use client";

import { Button } from "@/components/ui/button";
import { deleteUser, getUserEmail, getUsers } from "@/modules/dashboard/server";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";

export function UserList() {
  const queryClient = useQueryClient();

  const results = useQueries({
    queries: [
      {
        queryKey: ["users"],
        queryFn: async () => await getUsers(),
      },
      {
        queryKey: ["email"],
        queryFn: async () => await getUserEmail(),
      },
    ],
  });

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  if (results[0].isPending || results[1].isPending) return <p>Loading...</p>;

  console.log(results[1].data);

  const users = results[0].data ? [...results[0].data!] : [];

  return (
    <div className="space-y-2 mt-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-between items-center border p-2 rounded"
        >
          <div>
            <p>
              <strong>{user.name}</strong> ({user.age}) - {user.gender}
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <Button
            variant="destructive"
            onClick={() => mutation.mutate(user.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
