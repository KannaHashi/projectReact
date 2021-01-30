import React from "react";
import { Link } from "react-router-dom";
import Background from '../bg1.jpg'

const Navbar = ({children}) => {
   const OpenNav = () => {
      var nav = document.getElementById("mySideNav")
      var navbar = document.getElementById("navbar")
      nav.style.height = "100%"
      // nav.style.display = "block"
      if (x.matches) {
         nav.style.width = "60%"
      } else {
         nav.style.width = "16.6666666%";
      }
      nav.style.transition = "0.4s"
      navbar.className = "h-100 p-0"
      // navbar.style.marginLeft = "16.6666666%"
      navbar.style.transition = "0.4s"
      navbar.style.width = "83.3333333333333%"
      document.getElementById("fstbtn").style.display = "none"
      document.getElementById("scbtn").style.display = "block"
   }
   const CloseNav = () => {
      var nav = document.getElementById("mySideNav")
      var navbar = document.getElementById("navbar")
      nav.style.width = "0"
      if (x.matches) {
         nav.style.height = "0"
      }
      nav.style.transition = "0.4s"
      navbar.className = "h-100 p-0"
      navbar.style.width = "100%"
      // nav.style.display = "none";
      document.getElementById("fstbtn").style.display = "block"
      document.getElementById("scbtn").style.display = "none"
      
   }
   var x = window.matchMedia("(max-width: 720px)")

   const CollapseBtn = () => {
      if (x.matches) {
         var pp = document.getElementById = "pp"
         pp.onclick = function() {OpenNav()}
      } else {
         return(
            <button className="border-0 btn-outline-0 mt-2 bg-light collapse-button" id="fstbtn" onClick={OpenNav}><span className="navbar-toggler-icon"></span></button>
            // <button className="border-0 btn-outline-0 mt-2 bg-light collapse-button" id="scbtn" onClick={CloseNav}><span className="navbar-toggler-icon"></span></button>
         )
      }
   }

   const [auth, setAuth] = React.useState(false);
   React.useMemo(() => {
     if (localStorage.getItem("token")) {
       setAuth(true);
     }
   }, []);
   
   const ProfileAuthCondition = () => {
      if (auth === true) {
         return(
            <ul className="navbar-nav" style={{fontSize: "12px"}}>
               <li className="nav-item">
                  <Link className="nav-link" to="/login">
                     Login
                  </Link>
               </li>
            </ul>
         )
      } else {
         return(
            <img src={Background} className="img-thumbnail rounded-circle border-0 p-0" id="pp" alt=""/>
         )
      }
   }
   // const CloseNav = () => {
   //    document.getElementById("mySideNav").style.width = "0";
   // }
   return (
      <React.Fragment>
         <div className="container-fluid h-100">
            <div className="row h-100 p-0 d-flex justify-content-end">
               <div className="col-2 p-0">
                  <div className="sidenav text-start overflow-auto" id="mySideNav">
                     {/* <img alt="Nyantren"/> */}
                     <div className="p-4">
                        <span className="navbar-brand text-light">
                           Nyantren
                        </span>
                     </div>
                     <div className="row justify-content-center p-4 m-0 w-100">
                        <img src={Background} className="rounded-circle border-0 p-0" style={{width: "60px", height: "60px"}} alt=""/>
                        <span className="fw-light text-center text-light mt-3">Khaidir Muktamar</span>
                        <span className="fw-light text-center text-light mt-2" style={{fontSize: "10px", fontWeight: "lighter"}}>Nisn : 0027274810</span>
                     </div>
                     <div className="row text-start p-0 mx-0 mt-3">
                        <a href="javascript:void(0)" className="listile" onClick="crud">Data</a>
                        <div className="p-0">
                           <a href="#crudsantri" className="links listile ps-5">
                              Data Santri
                           </a>
                           <a href="#crudmusyrif" className="links listile ps-5">
                              Data Musyrif
                           </a>
                           <a href="#crudguru" className="links listile ps-5">
                              Data Guru
                           </a>
                        </div>
                        <a href="javascript:void(0)" className="listile">Dashboard</a>
                        <a href="javascript:void(0)" className="listile">About</a>
                        <a href="javascript:void(0)" className="listile">Creatifity</a>
                        <a href="javascript:void(0)" className="listile">Account</a>
                     </div>
                  </div>
               </div>
               <div className="h-100 p-0 float-right" id="navbar">
                  <nav className="navbar navbar-expand-sm navbar-light bg-light shadow text-dark py-3 px-2">
                     <div className="container-fluid justify-content-between">
                        {CollapseBtn}
                        <div className="float-end" id="pic2">
                           {ProfileAuthCondition()}
                        </div>
                     </div>
                  </nav>
                  <div className="py-3">{children}</div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Navbar;