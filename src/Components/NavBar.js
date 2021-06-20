import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router';
import "../Styles/NavBar.css"


function NavBar() {
    const [show, handleShow] = useState(false);
    const history=useHistory()
    const transitionNavBar=()=>{
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
    }
    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => {
        window.removeEventListener("scroll",transitionNavBar);
      };
    }, []);
    return (
      <div className={`nav ${show && "nav__black"}`}>
    
               <img
               onClick={() => history.push("/")}
        className="nav__logo"
        src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/641/article_full%401x.jpg"
        alt="Netfix Logo"
      />
        <img onClick={() => history.push("/profile")}
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFqZETyia_OGRMi21eSTZENOZRYGzGmHqrA&usqp=CAU"
        alt="Netflix Avatar"
      />
        </div>
    )
}

export default NavBar
