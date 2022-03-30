import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
const UserDetails = () => {

    
    const { id } = useParams();
    const { users, error, isPending } =  useFetch('http://localhost:8000/usersdata' + id);
    return (
        <div className="user-details"> 
            { isPending && <div> Loading ..</div> }
            {error && <div> { error } </div> }
            {users && (
                users.id ,
                users.firstName

            )}

        </div>
      );
}
 
export default UserDetails;