import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import userApi from "../../apis/userApi";
interface Update {
  username: string;
  password: string;
  phoneNumber: number;
  email: string;
}
export const useUsers = () => {
  const queryClient = useQueryClient();

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await userApi.getAllUsers();
      return res.data;
    },
  });
  const updateUser = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Update }) =>
      userApi.updateUser(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
  const deleteUser = useMutation({
    mutationFn: (id: string) => userApi.deleteUser(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
  return { usersQuery, updateUser, deleteUser };
};
