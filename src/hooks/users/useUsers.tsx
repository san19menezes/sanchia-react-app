// Library imports
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Project imports
import { UserListInterface } from "./useUsers.interface";

// API endpoint to fetch users
const GET_USERS = "https://gorest.co.in/public-api/users";

// Get the list of users using the GET_USERS URI
export const useUsers = () => {
  return useQuery<UserListInterface | undefined>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(GET_USERS);
      return data;
    },
  });
};
