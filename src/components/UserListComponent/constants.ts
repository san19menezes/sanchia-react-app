// Library imports
import { GridColDef } from "@mui/x-data-grid";

// Project imports
import { UserListInterface } from "../../hooks/users/useUsers.interface";

// Construct table columns based on the API response data
export const constructUserColumns = (data: UserListInterface): GridColDef[] => {
  // data[0] is used to construct the columns dynamically from the first object returned
  return data?.data?.length > 0
    ? Object.keys(data.data[0]).map(
        (key) =>
          ({
            field: key,
            headerName: key?.charAt(0)?.toUpperCase() + key?.slice(1),
            sortable: true,
            resizable: false,
            flex: 1,
          } as GridColDef)
      )
    : [];
};

// Construct table rows based on the API response data
export const constructUserRows = (data: UserListInterface): any[] => {
  return data?.data?.length > 0
    ? data.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        status: user.status,
      }))
    : [];
};
