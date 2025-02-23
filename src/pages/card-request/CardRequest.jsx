import './card-request.css';
import Header from "../../components/Header";
import { MdOutlineCreditScore } from "react-icons/md";
import { Link} from "react-router-dom";
import { BiSearch } from "react-icons/bi";

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

                     <div className="search_box">
                        <BiSearch className="search_icon" />
                        <input type="text" placeholder="Search by branch" />  
                    </div>

                    <div className="table_box">
                        <table className="responsive_table">
                            <thead>
                            <tr>
                                <th>Branch</th>
                                <th>Initiator</th>
                                <th>Quantity</th>
                                <th>Batch</th>
                                <th>Date Requested</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Corporate</td>
                                <td>RootUser</td>
                                <td>847264905</td>
                                <td>11/14/2024  10:27:43</td>
                                <td>Ready</td>
                                <td>Pending</td>
                                <td>
                                    <Link to="" className="view_link">View</Link>
                                </td>
                            </tr>

                            <tr>
                                <td>Corporate</td>
                                <td>RootUser</td>
                                <td>847264905</td>
                                <td>11/14/2024  10:27:43</td>
                                <td>Ready</td>
                                <td>Pending</td>
                                <td>
                                    <Link to="" className="view_link">View</Link>
                                </td>
                            </tr>

                            <tr>
                                <td>Corporate</td>
                                <td>RootUser</td>
                                <td>847264905</td>
                                <td>11/14/2024  10:27:43</td>
                                <td>Ready</td>
                                <td>Pending</td>
                                <td>
                                    <Link to="/card-request/card-request-pending" className="view_link">View</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
  );
};

export default CardRequest;
