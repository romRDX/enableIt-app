import { useState, useEffect, createContext, useContext } from "react";
import { User } from "../types"

interface UserData {
  users: User[];
}

interface BookingsContextData {
  userList: UserData;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

type Props = {
  children?: React.ReactNode
};

const BookingsContext = createContext<BookingsContextData>({} as BookingsContextData);

export const UsersAPIProvider: React.FC<Props> = ({ children }) => {
  const [jobsData, setJobsData] = useState<UserData>({ users: []});
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    fetch(`https://give-me-users-forever.vercel.app/api/users/${(currentPage)*10}/next`, {
        method: "GET", 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }
    })
      .then((res) => res.json())
      .then((jobsData) => setJobsData(jobsData));
  }, [currentPage]);

  return (
    <BookingsContext.Provider
      value={{ userList: jobsData, setCurrentPage, currentPage }}
    >
      {children}
    </BookingsContext.Provider>
  );
};

export function useUsers(): BookingsContextData {
  const context = useContext(BookingsContext);

  return context;
}

