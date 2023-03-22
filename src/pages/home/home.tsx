import React, { useState, useMemo } from 'react';
import UserItem from '../../components/userItem/userItem';
import styles from "./home.module.scss";
import { useUsers } from "../../hooks/useUsers";
import Pagination from '../../components/pagination/pagination';
import SearchInput from '../../components/searchInput/searchInput';

const Home = () => {
  const { userList, setCurrentPage, currentPage } = useUsers();

  const[filter, setFilter] = useState<string>("");

  const filteredUsersList = useMemo(() => {
    const filtered = userList.users.filter((user) => user.FirstNameLastName.toLowerCase().includes(filter.toLowerCase()) || user.Company.toLowerCase().includes(filter.toLowerCase()));
    
    return filtered.length > 10 ? filtered?.slice(0, -2) : filtered;
  }, [filter, userList])

  return (
    <div className={styles.home}>
        <aside className={styles.home__menu}>
          <SearchInput setFilter={setFilter} />

          <Pagination currentPage={currentPage} totalPages={7} setCurrentPage={setCurrentPage} />

          <h1>README.MD</h1>

          <p>I used meta's logo just as a placeholder, i was expecting that the user data from the API would have an image, so lets pretend there was an image that is the company logo and that it is in place of that meta logo.</p>
          <p>Because this was more of a simple test, i limited the size of the pagination, this should be enough even tough this API returns a lot of data.</p>
          <p>I created a more simplistic layout and focused on the quality of the code and extra features, so i apologize if things are not really beautiful in here.</p>
          <p>To make it easier, here it is the link to my linkedin where you can take a deeper look at my skills:</p>
          <p><a href="https://www.linkedin.com/in/romullo-sander-27491795/" target="_blank">Linkedin</a></p>
          <p>Thank you very much for the opportunity!</p>

        </aside>
        <ul className={styles.home__userList}>
          {
            filteredUsersList?.map((user) => (
              <UserItem user={user} />      
            ))
          }
        </ul>
    </div>
  );
}

export default Home;
