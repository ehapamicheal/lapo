// import React from "react";
// // import "./AnalyticsCard.css";

// const AnalyticsCard = ({ icon, title, value, growth, growthText, note, className }) => {
//   return (
//     <div className={`analytics-card ${className}`}>
//       <div className="analytics-card-header">
//         <span className="icon">{icon}</span>
//       </div>

//       <h4 className="analytics-title">{title}</h4>
//       <p className="analytics-value">{value}</p>

//       {growth && (
//         <p className="analytics-growth">
//           {growth} {growthText}
//         </p>
//       )}

//       {note && <p className="analytics-note">{note}</p>}
//     </div>
//   );
// };

// export default AnalyticsCard;


import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineErrorOutline } from "react-icons/md";

const AnalyticsCard = ({ icon: Icon, title, value, percentage, isPending,  iconClass }) => {
  return (
    <div className="analytics-card">
      <Icon className={`icon ${iconClass}`} /> 
      <p className="top_text">{title}</p>

      <div className="box-content">
        <h2 className="text_h2">{value}</h2>

        {/* Check if it's a pending request */}
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

