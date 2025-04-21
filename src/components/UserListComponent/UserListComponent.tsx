// Library imports
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

// Project imports
import { useUsers } from "../../hooks/users";
import { BaseDataGrid } from "../common/BaseDataGridComponent/BaseDataGridComponent";
import { constructUserColumns, constructUserRows } from "./constants";
import { Typography } from "@mui/material";

export const UserListComponent = () => {
  const { data, isLoading, isError } = useUsers();
  const [tableColumns, setTableColumns] = useState<GridColDef[]>([]);
  const [tableRows, setTableRows] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setTableColumns(constructUserColumns(data));
      setTableRows(constructUserRows(data));
    }
  }, [data]);

  if (isLoading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (isError) {
    return <Typography variant="h6">Error loading users</Typography>;
  }

  if (!data?.data?.length) {
    return <Typography variant="h6">No User Data</Typography>;
  }

  return <BaseDataGrid rows={tableRows} columns={tableColumns} />;
};
