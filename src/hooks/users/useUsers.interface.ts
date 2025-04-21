// Define the Typescript interface for Users List

interface PaginationMetaInterface {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

interface ApiMetaInterface {
  pagination: PaginationMetaInterface;
}

interface UserInterface {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface UserListInterface {
  code: number;
  meta: ApiMetaInterface;
  data: UserInterface[];
}
