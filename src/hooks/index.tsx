import React from 'react';
import { UsersAPIProvider } from "./useUsers";

type Props = {
  children?: React.ReactNode
};

const AppProvider: React.FC<Props> = ({ children }) => (
  <UsersAPIProvider>
    {children}
  </UsersAPIProvider>
);

export default AppProvider;