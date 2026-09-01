import { useState ,useEffect } from 'react';
import Loadingdata from './components/loadingdata';

function App() {

  const [click , setClick] = useState(false);
  const [users , setUsers] = useState( [] );

  const handleClick = () => {
    setClick(true);
   } 

   useEffect(() => {
    if(click){
      const getUsers = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const data = await response.json();
       setUsers(data);
      }
      getUsers();
    }
}, [click]);
 
 return (
    <>
     <Loadingdata>
       <Loadingdata.Button onClick={handleClick} />
       <Loadingdata.Users users={users} />
     </Loadingdata>
    </>
  )
}

export default App
