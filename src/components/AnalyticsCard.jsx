import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineErrorOutline } from "react-icons/md";

const AnalyticsCard = ({ icon: Icon, title, value, percentage, isPending,  iconClass }) => {
  return (
    <div className="analytics-card">
      <Icon className={`icon ${iconClass}`} /> 
      <p className="top_text">{title}</p>

      <div className="box-content">
        <h2 className="text_h2">{value}</h2>


        {isPending ? (
          <div className="pending_box">
            <MdOutlineErrorOutline className="error_icon" />
            <p>Requires attention</p>
          </div>
        ) : (
          <div className="box">
            <div className="icon_box">
              <GoArrowUpRight className="bend_arrow_icon" />
              <p>{percentage}</p>
            </div>
            <p className="p2">this month</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;

