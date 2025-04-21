import "./App.css";

// Library imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, CssBaseline, Typography } from "@mui/material";

//Project imports
import { UserListComponent } from "./components/UserListComponent";

function App() {
  // Initialization of react-query client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          minHeight: "100vh",
          px: 4,
          py: 4,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h4">User List</Typography>
        <UserListComponent />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
