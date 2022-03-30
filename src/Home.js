// import { useState  } from 'react';
// import dummydata from './table';

// const Home = () => {
//     const [users, setUsers] = useState([
//             {
//               id: "123456789",
//               createdDate: "2021-01-06T00:00:00.000Z",
//               status: "En validation",
//               firstName: "Mohamed",
//               lastName: "Taha",
//               userName: "mtaha",
//               registrationNumber: "2584",
//             },
//             //  {
//             //   id: "987654321",
//             //   createdDate: "2021-07-25T00:00:00.000Z",
//             //   status: "Validé",
//             //   firstName: "Hamid",
//             //   lastName: "Orrich",
//             //   userName: "horrich",
//             //   registrationNumber: "1594",
//             // },
//             //    {
//             //   id: "852963741",
//             //   createdDate: "2021-09-15T00:00:00.000Z",
//             //   status: "Rejeté",
//             //   firstName: "Rachid",
//             //   lastName: "Mahidi",
//             //   userName: "rmahidi",
//             //   registrationNumber: "3576",
//             // }
          
//     ]);
//     return (
//         <div className="Home">
//         <table  userstable={users} />
//         </div>
//       );
// }
 
// export default Home;


import { Table } from 'react-bootstrap'
// import { useState, useEffect} from "react";
import UserList from "./table";
import useFetch from './useFetch';

const Home = () => {
 
  const { users, isPending, error } = useFetch('http://localhost:8000/usersdata')

  

  return (
    <div className="home ">  
<div className=' user-preview  user-preview col-md-8 offset-md-2'>
           { error && <div>{ error }</div> }

{ isPending && <div> loading..</div> } 
 <Table striped bordered hover responsive="md">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>createdDate</th>
                  <th>status</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>userName</th>
                  <th>registrationNumber</th>
                  <th>Action</th>
{         /*     <th>Preview</th> */}
              </tr>
          </thead>
 
       { users && <UserList users={users}  />}
    </Table>              

</div>
      
     
        <a href="/adduser" className='float-right'> add User </a>

    </div>
  );
}
 
export default Home;