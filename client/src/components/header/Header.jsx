import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Header() {
   const { email, isAuthenticated } = useAuth();

   return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
         <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src="../../../public/images/newVinyl.png" width='70' alt="logo" />
         </Link>
         <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-4 py-lg-0">
               <Link to="/" className="nav-item nav-link">Home</Link>
               <Link to="/vinyls" className="nav-item nav-link">All vinyls</Link>
               {isAuthenticated ? (
                  <>
                     <Link to="/vinyls/create" className="nav-item nav-link">Create</Link>
                     <Link to="/logout" className="nav-item nav-link">Logout</Link> 
                  </>)
                  : (<><Link to="/login" className="nav-item nav-link">Login</Link>
                     <Link to="/register" className="nav-item nav-link">Register</Link> </>)}
            </div>
            <div className="h-100 d-lg-inline-flex align-items-center d-none">
               <Link className="btn btn-square rounded-circle bg-light text-primary me-2" to=""><i className="fab fa-facebook-f"></i></Link>
               <Link className="btn btn-square rounded-circle bg-light text-primary me-2" to=""><i className="fab fa-twitter"></i></Link>
               <Link className="btn btn-square rounded-circle bg-light text-primary me-2" to=""><i className="fab fa-linkedin-in"></i></Link>
               <Link className="btn btn-square rounded-circle bg-light text-primary me-0" to=""><i className="fab fa-instagram"></i></Link>
            </div>
         </div>
      </nav>
   );
}