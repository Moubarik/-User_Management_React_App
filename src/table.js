
// import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router';
// import {  } from "react-router-dom";
// import * as React from 'react';

const UserList = ({ users }) => {


    // const history = useHistory();
    
    const HandleClick = (id) => {
        // const { id } = useParams();
console.log(id);
        fetch('http://localhost:8000/usersdata/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            // history.push("/");
            window.location.reload(true);


        })
      }
    
    return (
      <tbody>
        {users.map(user => (

              <tr  key={user.id}>
                  <td>{ user.id }</td>
                  <td>{ user.createdDate }</td>
                  <td>{ user.status }</td>
                  <td>{ user.firstName }</td>
                  <td>{ user.lastName }</td>
                  <td>{ user.userName }</td>
                  <td>{ user.registrationNumber }</td>
                  <td> 
                  {  <button  onClick={() => HandleClick(user.id)}> delete </button>  } 
                   { /* <Link  onClick={HandleClick } to={ `/users/${user.id}` } 
        >  Delete </Link> */}
                   </td>
             </tr>

             
             ))}
             </tbody>
    );
  }
   
  export default UserList;