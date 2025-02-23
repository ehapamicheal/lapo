import { FaUserShield } from "react-icons/fa6";
import Header from "../../components/Header";

const Roles = ({onToggleSidebar}) => {
  return (
    <main className="main_container">
        <section className="right_section">
            <Header onToggleSidebar={onToggleSidebar}>
                <div className="top_title">
                    <FaUserShield />
                    <p>Roles</p>
                </div>
            </Header>

            <div className="card_request_container">
                <div className="card_request-top">
                    <h2>Roles</h2>
                    <p>Manage your roles, create roles, view roles and edit roles. Select privileges and set account permissions here.</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Roles;