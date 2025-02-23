import { TbAdjustmentsCheck } from "react-icons/tb";
import Header from "../../components/Header";

const CardScheme = ({onToggleSidebar}) => {
  return (
    <main className="main_container">
        <section className="right_section">
            <Header onToggleSidebar={onToggleSidebar}>
                <div className="top_title">
                    <TbAdjustmentsCheck />
                    <p>Card Scheme</p>
                </div>
            </Header>

            <div className="card_request_container">
                <div className="card_request-top">
                    <h2>Card Scheme</h2>
                    <p>Add, view and edit card schemes here.</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default CardScheme;