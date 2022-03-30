import { Link } from "react-router-dom";
const   Navbar = () => {
    return (  
        <nav className="navbar">
        <h1> User management</h1>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ color:"white", backgroundColor:"#f1356d", borderRadius: '8px' }}  >New User</Link>
        <Link to="/users/:id" style={{ color:"white" , backgroundColor:"#f1356d", borderRadius: '8px' }}  >Show User</Link>
        </div>
        </nav>
    );
}
 
export default Navbar;