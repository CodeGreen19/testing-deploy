"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, deleteUser } from "@/server";
import { Button } from "@/components/ui/button";

export function UserList() {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  if (isLoading) return <p>Loading...</p>;

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
