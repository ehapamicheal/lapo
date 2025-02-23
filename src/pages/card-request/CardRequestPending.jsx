import './card-request.css';
import Header from "../../components/Header";
import { MdOutlineCreditScore } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const CardRequestPending = ({ onToggleSidebar }) => {
  return (
    <main className="main_container">
      <section className="right_section">
        <Header onToggleSidebar={onToggleSidebar} className="card_request_header">
          <div className="top_title card_title">
                <Link to="/card-request" className="back_link">
                    < MdKeyboardArrowLeft />
                    <p>back</p>
                </Link>
                
                <div className="title-2">
                    <MdOutlineCreditScore className="card_request_icon" />
                    <p>Pending Details</p>
                </div>
          </div>

        </Header>

        <div className="card_request_container">
          <h2>Request Details</h2>
          <p>Perform predetermined actions on card requests here.</p>
        </div>
      </section>
    </main>
  );
};

export default CardRequestPending;
