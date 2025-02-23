import './sidebar.css';
import { NavLink } from "react-router-dom";
import { Link } from "react-router";
import { sidebarLinks } from '../Data'
import { MdLogout } from "react-icons/md";
import lapoLogo from '../assets/images/lapo-logo.png';
import buttomLogo from '../assets/images/cardinfra-logo.png';
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const SideBar = ({ isSidebarOpen, onToggleSidebar }) => {

    const DashboardLink = { name: "Dashboard", path: "/" };
  return (
        <nav className={`nav_container ${isSidebarOpen ? "active" : ""}`}>

            <div className="close_box">
                <MdOutlineClose className="close_menu" onClick={onToggleSidebar} />
            </div>

            <Link to="/" className="side_bar-logo"  onClick={onToggleSidebar}>
                <img src={lapoLogo} alt="lapo logo" />
            </Link>

            <aside className="aside_wrapper">

               <div className="top_link_box">
                    <NavLink  onClick={onToggleSidebar} to={DashboardLink.path} className={({ isActive }) => isActive ? "active-link" : ""}>
                        <span><HiOutlineHome /></span>
                        <p>{DashboardLink.name} </p>
                    </NavLink>
               </div>

                <div className="title_menu">
                    <p>Main menu</p>
                </div>

                <ul className="nav-links">
                    {sidebarLinks.map((link) => (
                        <li key={link.name}>

                            <NavLink to={link.path} onClick={onToggleSidebar} className={({ isActive }) => isActive ? "active-link" : ""}>
                                <span className="tag_icons">{link.icon}</span>
                                <p className="link_text">{link.name}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="sidebar_bottom">
                    <div className="bottom_link_box">
                        <Link className="logout_link">
                            <MdLogout className="bottom_icon" />
                            <p>Logout</p>
                        </Link>
                    </div>

                    <div className="sidebar_avatar_box">
                        <p>POWERED BY</p>
                        <div className="">
                            <img src={buttomLogo} alt=" buttom logo" />
                        </div>
                    </div>
                    
                </div>
            </aside>
        </nav>

  )
}

export default SideBar;