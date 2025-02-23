import './home.css';
import Header from '../../components/Header';
import { MdOutlineCalendarToday } from "react-icons/md";
import { quickAccess } from '../../Data';
import { Link } from 'react-router-dom';
import AnalyticsCard from '../../components/AnalyticsCard';
import { MdOutlineCreditCard } from "react-icons/md";
import { FaHourglassHalf } from "react-icons/fa";
import { MdCreditScore } from "react-icons/md";
import { TbCashBanknote } from "react-icons/tb";
import MonthlyChart from '../../components/MonthlyChart';
import { HiOutlineHome } from "react-icons/hi";



const Home = ({onToggleSidebar}) => {

  return (
    <main className="main_container">

        <section className="right_section">

            <Header onToggleSidebar={onToggleSidebar} className="home_header">
                <div className="top_title">
                    <HiOutlineHome className="home_icon" />
                    <p>Dashboard</p>
                </div>
            </Header>

            {/* This the main  */}
            <div className="home_container">
                <div className="head_wrapper">
                    <div className="right">
                        <h3>Hi Nazeer, what would you like to do today?</h3>
                        <p>Last login: <span>26/11/2024</span>  <span>14:39:58</span></p>
                    </div>

                    <div className="todays_box">
                        <div className="box1">
                            <MdOutlineCalendarToday className="calender_icon" />
                            <p>Today</p>
                        </div>

                        <div className="box2">
                            <p>11 Nov 2024</p>
                        </div>
                    </div>
                </div>

                <div className="quick_access_wrapper">
                    <h3 className="text">Your Quick Access</h3>

                    <div className="quick_access_contents">
                        {quickAccess.map((quick, index) => (
                            <Link className="main_box" key={index}>

                                <div className="mage_box">
                                    <img src={quick.icon} alt={quick.title} />
                                </div>

                                <div className="title_box">
                                    <p>{quick.title}</p>
                                    <span>{quick.arrow}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>  

                <div className="analytics-container">
                    <h3 className="head_text">Analytics</h3> 

                    <div className="analytics-wrapper">
                        <AnalyticsCard
                            icon={MdCreditScore}
                            title="Total Active Cards"
                            value="26,478"
                            percentage="+9%"
                            iconClass="score_icon"
                        />

                        <AnalyticsCard
                            icon={MdOutlineCreditCard}
                            title="Total Personalized Cards"
                            value="15,703"
                            percentage="8.5%"
                            iconClass="credit_icon"
                        />

                        <AnalyticsCard
                            icon={TbCashBanknote}
                            title="Today’s Revenue"
                            value="₦9.3M"
                            percentage="+6%"
                            iconClass="bank_note_icon"
                        />

                        <AnalyticsCard
                            icon={FaHourglassHalf}
                            title="Pending Requests"
                            value="38"
                            isPending={true} 
                            iconClass="glass_icon"
                        />
                    </div>

                </div>

                <MonthlyChart />

            </div>
        </section>
  </main>
  )
}

export default Home;