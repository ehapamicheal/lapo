import './header.css';
import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";




const Header = ({ onToggleSidebar, children, className }) => {
    return (
      <header className={`header_container ${className}`}>
        <div className="header_main">
            <div className="header_menu">
                <div className="menu_box">
                <RxHamburgerMenu className="open_menu" onClick={onToggleSidebar} />
                </div>

                <div className="top_title">
                    {children}
                    
                </div>
            </div>
  
            <div className="right_side">
                <div className="search_box">
                    <BiSearch className="search_icon" />
                    <input type="text" placeholder="Search" />  
                </div>
    
                <IoIosNotificationsOutline className="notfication_icon" />
                <FiUser className="user_avatar" />
            </div>
        </div>
      </header>
    );
  };

export default Header;  