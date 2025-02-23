// SIDEBAR
// import { MdDashboard } from "react-icons/md";
import { FaBuilding, FaChartBar, FaCreditCard, FaUser, FaDatabase, FaCog, FaMobileAlt, FaClipboardList } from "react-icons/fa";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { TbBrandDatabricks } from "react-icons/tb";
import { RiListUnordered } from "react-icons/ri";
import { FaRegMap } from "react-icons/fa6";
import { PiBuildingOffice } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { PiCreditCard } from "react-icons/pi";
import { MdOutlineCreditScore } from "react-icons/md";
import { CiCreditCardOff } from "react-icons/ci";


// QUICK ACCESS
import cardIcon1 from './assets/svgs/card-icon1.svg';
import cardIcon2 from './assets/svgs/card-icon2.svg';
import cardIcon3 from './assets/svgs/card-icon3.svg';
import cardIcon4 from './assets/svgs/card-icon4.svg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



// SIDEBAR  
export const sidebarLinks = [
  { name: "Branches",
    path: "/branches", 
    icon: <PiBuildingOffice /> 
  },
  { name: "Roles",
    path: "/roles", 
    icon: <FaUserShield /> 
  },
  { name: "Users",
    path: "/users", 
    icon: <HiUserGroup /> 
  },
  { name: "Card Scheme", 
    path: "/card-scheme", 
    icon: <FaUser /> 
  },
  { name: "Card Profile", 
    path: "/card-profile", 
    icon: <FaDatabase /> 
  },
  { name: "Card Request",
    path: "/card-request", 
    icon: <MdOutlineCreditScore /> 
  },
  { name: "Stock", 
    path: "/stock", 
    icon: <FaMobileAlt /> 
  },
  { name: "Cards", 
    path: "/cards",  
    icon: <PiCreditCard /> 
  },
  { name: "Block/Unblock-Card", 
    path: "/block-unblock-card", 
    icon: <CiCreditCardOff /> 
  },
  { name: "Authorization List", 
    path: "/authorization-list", 
    icon: <RiListUnordered /> 
  },
  { name: "Authorization Queue", 
    path: "/authorization-queue", 
    icon: <TbBrandDatabricks /> 
  },
  { name: "Trail", 
    path: "/trail", 
    icon: <FaRegMap /> 
  },
  { name: "Account", 
    path: "/account", 
    icon: <HiOutlineUser /> 
  }

];


export const quickAccess = [
  {
    icon: cardIcon1,
    title: "Manage a Card",
    arrow: <MdOutlineKeyboardArrowRight />
  },
  {
    icon: cardIcon2,
    title: "Issue Instant Card",
    arrow: <MdOutlineKeyboardArrowRight />
  },
  {
    icon: cardIcon3,
    title: "Issue Personalized Card",
    arrow: <MdOutlineKeyboardArrowRight />
  },
  {
    icon: cardIcon4,
    title: "Review Card Requests",
    arrow: <MdOutlineKeyboardArrowRight />
  }
];

export const cardRequests = [
  { branch: "Corporate", 
    type: "Instant", 
    quantity: 10,
    status: "Ready", 
    statusClass: "status-ready" 
  },
  { branch: "Corporate", 
    type: "Personalized", 
    quantity: 10, 
    status: "In Progress", 
    statusClass: "status-inprogress" 
  },
  { branch: "Corporate", 
    type: "Personalized", 
    quantity: 10, 
    status: "Acknowledged", 
    statusClass: "status-acknowledged" },
  { branch: "Corporate", 
    type: "Instant", 
    quantity: 10, 
    status: "Pending", 
    statusClass: "status-pending" 
  }
];
