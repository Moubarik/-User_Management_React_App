import { useState } from "react";
// import { useHistory } from "react-router-dom";

const  Create = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [userName, setUserName] = useState('');
const [registrationNumber, setRegistrationNumber] = useState('');
const [status, setStatus] = useState('Validé');
const [createdDate, setceatedDate] = useState('');
const [isPending, setIsPending] = useState(false);
// const history = useHistory();


const handleSubmit = (e) => {
    // e.preventdefault();
    const users = { firstName, lastName, userName, registrationNumber, status, createdDate };
 setIsPending(true);
fetch('http://localhost:8000/usersdata', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(users)
}).then(() => {
    console.log('New User Added');
    setIsPending(false);
    // history.go(-1);
    // history.push('/');
});
}


    return (  
        <div className="create">
        <h2>Add a new User</h2>
        <form className="user-previe"  onSubmit={handleSubmit}>
       <div className="popup_inner">
       { /*<button onClick="" className="close" >X</button>*/ }
    <div className="grid"> 
        <input
                required
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                
            />

          
             <select 
             value={status}
             onChange={(e) => setStatus(e.target.value)}                name="status"  required>
             <option value="En validation">En validation</option>
                <option value="Validé">Validé</option>
                <option value="Rejeté">Rejeté</option>
                </select>
            <input

                type="text"
                placeholder="User Name"
                name="userName"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <input
                type="date"
                placeholder="Created Date"
                name="createdDate"
                required
                value={createdDate}
                onChange={(e) => setceatedDate(e.target.value)}
            />
          <span></span>
            <input
                type="number"
                placeholder="Registration Number"
                name="registrationNumber"
                required
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
            />
     </div>
     <div> 
     { /*
          <p> {firstName}</p>
       <p> {lastName}</p>
       <p> {userName}</p>
       <p> {registrationNumber}</p>
       <p> {status}</p>
       <p> {date}</p> 
       */
    }



{  !isPending  &&  <button  >Add user</button>}  
{  isPending  &&  <button  disabled  > ...</button>}  

</div>
    </div>

        </form>
        </div>
    );
}
 
export default Create;