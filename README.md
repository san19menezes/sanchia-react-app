# sanchia-react-app

# React User List Project

This is a simple React application that fetches and displays a list of users using React Query and Material UI's DataGrid. It follows a clean and modular folder structure with separation of concerns for hooks and components.

---

## Folder Structure

```
src/
├── App.tsx                            # Main application component
├── hooks/
│   └── useUsers.tsx                   # Custom React Query hook to fetch user data
├── components/
│   ├── common/
│   │   └── BaseDataGridComponent.tsx  # Reusable MUI DataGrid wrapper for displaying tables
│   └── UserListComponent.tsx          # Component that renders user data in a table
```

---

## Component Overview

### `App.tsx`

- Root component of the app.
- Sets up `QueryClientProvider` for React Query.
- Renders the `UserListComponent`.

### `hooks/useUsers.tsx`

- Custom hook built using React Query’s `useQuery`.
- Fetches user data from the API (`https://gorest.co.in/public-api/users`).
- Provides `data`, `isLoading`, and `isError` states.

### `components/UserListComponent.tsx`

- Feature component that displays the user list.
- Uses `useUsers()` to fetch user data.
- Renders the result using `BaseDataGridComponent`.

### `components/common/BaseDataGridComponent.tsx`

- A reusable component built using MUI’s `DataGrid` package.
- Intended to be extended for use across multiple components that require tables.

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

---

## API Used

- [GoREST Public API](https://gorest.co.in/public-api/users)

---

## Notes

- The `common` folder is meant to hold all reusable UI components like buttons, tables, modals etc.
- `UserListComponent` is a feature-specific component focused on rendering user data.
- The structure follows separation of concerns, making it easy to scale the app with more hooks or components.

---

## Built With

- [React](https://reactjs.org/)
- [React Query](https://tanstack.com/query/)
- [Material UI (MUI)](https://mui.com/)
