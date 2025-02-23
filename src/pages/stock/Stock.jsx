import { AiOutlineStock } from "react-icons/ai";
import Header from "../../components/Header";

const Stock = ({onToggleSidebar}) => {
  return (
    <main className="main_container">
        <section className="right_section">
            <Header onToggleSidebar={onToggleSidebar}>
                <div className="top_title">
                    <AiOutlineStock  />
                    <p>Stock</p>
                </div>
            </Header>

            <div className="card_request_container">
                <div className="card_request-top">
                    <h2>Stock</h2>
                    <p>Add, view stocks here.</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Stock;