 import Button from './button';
  import Users from './users';
 
 function Loadingdata( {children} ) {

   return (
    <section className="loading-data">
      <h1>Lista utenti</h1>
      {children}
    </section>
  )
}

Loadingdata.Button = Button; 
Loadingdata.Users = Users;

export default Loadingdata;