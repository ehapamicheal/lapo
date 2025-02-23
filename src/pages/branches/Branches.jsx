import Header from "../../components/Header";
import { PiBuildingOffice } from "react-icons/pi";

const Branches = ({onToggleSidebar} ) => {
  return (
    <main className="main_container">
      <section className="right_section">
        <Header onToggleSidebar={onToggleSidebar} className="card_request_header">
          <div className="top_title">
            <PiBuildingOffice className="card_request_icon" />
            <p>Branches</p>
          </div>
        </Header>

        <div className="card_request_container">
          <div className="card_request-top">
            <h2>Branches</h2>
            <p>Add branches, view branches and edit branches.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Branches;