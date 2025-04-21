// Library imports
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Propject imports
import { BaseDataGridInterface } from "./BaseDataGrid.interface";

// Reusable Data Grid to render data in rows and columns
export const BaseDataGrid = ({ rows, columns }: BaseDataGridInterface) => {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu // disables column filter/hide
        disableRowSelectionOnClick // disable row selection when the table row is clicked
      ></DataGrid>
    </Box>
  );
};
