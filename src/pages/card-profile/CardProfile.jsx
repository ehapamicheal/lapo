import { GiSwipeCard } from "react-icons/gi";
import Header from "../../components/Header";

const CardProfile = ({onToggleSidebar}) => {
    return (
        <main className="main_container">
            <section className="right_section">
                <Header onToggleSidebar={onToggleSidebar} className="card_request_header">
                    <div className="top_title">
                        <GiSwipeCard className="card_request_icon" />
                        <p>Card Profile</p>
                    </div>
                </Header>

                <div className="card_request_container">
                    <div className="card_request-top">
                        <h2>Card Profile</h2>
                        <p>Create, view and edit card profiles here.</p>
                    </div>
                </div>
            </section>
        </main>
   )
}

export default CardProfile;