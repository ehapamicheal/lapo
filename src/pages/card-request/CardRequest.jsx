import './card-request.css';
import Header from "../../components/Header";
import { MdOutlineCreditScore } from "react-icons/md";

const CardRequest = ({ onToggleSidebar }) => {
    return (

        <main className="main_container">
            <section className="right_section">
                <Header onToggleSidebar={onToggleSidebar} className="card_request_header">
                    <div className="top_title">
                    <MdOutlineCreditScore className="card_request_icon" />
                    <p>Card Request</p>
                    </div>
                </Header>

                <div className="card_request_container">
                    <div className="card_request-top">
                        <h2>Card Requests</h2>
                        <p>View and attend to card requests here.</p>
                    </div>

                </div>
            </section>
        </main>
  );
};

export default CardRequest;
