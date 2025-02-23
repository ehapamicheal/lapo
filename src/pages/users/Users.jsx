import Header from "../../components/Header";
import { FaUser } from "react-icons/fa";

const Users = ({onToggleSidebar}) => {
  return (
    <main className="main_container">
        <section className="right_section">
            <Header onToggleSidebar={onToggleSidebar}>
                <div className="top_title">
                    <FaUser />
                    <p>Users</p>
                </div>
            </Header>

            <div className="card_request_container">
                <div className="card_request-top">
                    <h2>Users</h2>
                    <p>Manage your users, create users, view and edit users. Assign roles to users here.</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Users;