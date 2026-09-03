import { useState, useEffect } from 'react';
import Button from './button';
import Users from './users';

export default function Loadingdata() {

  const [click, setClick] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    setClick(true);
  };

  useEffect(() => {
    if (click) {
      const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      };
      getUsers();
    }
  }, [click]);

  return (
    <section className="loading-data">
      <h1>Lista utenti</h1>
      <Button onClick={handleClick} />
      <Users users={users} />
    </section>
  );
}


