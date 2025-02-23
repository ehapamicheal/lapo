import './monthly-chart.css';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LuMaximize2 } from "react-icons/lu";
import { cardRequests } from '../Data';


const MonthlyChart = () => {

    const data = [
        { name: "May", Personalized: 14, Instant: 40 },
        { name: "Jun", Personalized: 25, Instant: 45 },
        { name: "Jul", Personalized: 8, Instant: 20 },
        { name: "Aug", Personalized: 8, Instant: 40 },
        { name: "Sep", Personalized: 10, Instant: 54 },
        { name: "Oct", Personalized: 17, Instant: 65 },
        { name: "Nov", Personalized: 7, Instant: 70 },
    ];

    const incomeData = [
        { name: "Mon", income: 50 },
        { name: "Tue", income: 40 },
        { name: "Wed", income: 60 },
        { name: "Thu", income: 55 },
        { name: "Fri", income: 70 },
        { name: "Sat", income: 65 },
        { name: "Sun", income: 80 },
    ];

    const distributionData = [
        { name: "Active", value: 1600, color: "#01A4AF" },
        { name: "Inactive", value: 150, color: "#014DAF" },
        { name: "Blocked", value: 70, color: "#8020E7" },
        { name: "Lost", value:60, color: "#FF4457" },
        { name: "Expired", value: 200, color: "#FFBA24" },
    ];




  return (
    <div className="monthly_chart_container">
        <div className="monthly_chart_wrapper">
            <div className="monthly_box">
                <div className="head">
                    <h2>Monthly Issuance</h2>
                    <LuMaximize2 className="maximize_icon" />
                </div>
                
                {/* <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data} width="100%">
                        <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F2F4F7" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} axisLine={false} tick={{ fontSize: 15, fill: "#667085" }} interval={0} />
                        <Tooltip />
                        <Legend content={<CustomLegend />} />
                        <Bar dataKey="Personalized" stackId="a" fill="#003DA5" radius={[0, 0, 0, 0]} barSize={40} />
                        <Bar dataKey="Instant" stackId="a" fill="#A8C7FA" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer> */}

                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data} margin={{top: 9, left: 0, right: 9}}>
                        <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F2F4F7" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} axisLine={false} tick={{ fontSize: 15, fill: "#667085" }} interval={0} />
                        <Tooltip />
                        <Legend iconType="circle"  />
                        <Bar dataKey="Personalized" stackId="a" fill="#003DA5" radius={[0, 0, 0, 0]} barSize={40} />
                        <Bar dataKey="Instant" stackId="a" fill="#A8C7FA" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="table-container">
                <div className="head">
                    <h2>Recent Card Requests</h2>
                    <LuMaximize2 className="maximize_icon" />
                </div>

                <div className="table-wrapper">
                    <table className="table_main">
                        <thead>
                            <tr className="th_box">
                                <th>Branch</th>
                                <th>Card Type</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cardRequests.map((request, index) => (
                                <tr key={index} className="list_tr">
                                    <td className="branch">{request.branch}</td>
                                    <td className="type">{request.type}</td>
                                    <td className="quantity">{request.quantity}</td>
                                    <td>
                                        <span className={`status-label status ${request.statusClass}`}>{request.status}</span>
                                    </td>
                                    <td className="view-link">View</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="income-date_wrapper">
                <div className="head">
                    <h2>This Week’s Income</h2>
                    <LuMaximize2 className="maximize_icon" />
                </div>
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={incomeData} margin={{top: 9, left: 0, right: 9}}>
                        <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F2F4F7" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false}  />
                        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} interval={0} axisLine={false} tick={{ fontSize: 12, fill: "#667085" }} />
                        <Tooltip />
                        <Line type="monotone" dataKey="income" stroke="#4DAF01" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="pie_wrapper">
                <h2>Card Status Distribution</h2>
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Pie
                            data={distributionData}
                            cx="50%"
                            cy="50%"
                            innerRadius={71}
                            outerRadius={83}
                            paddingAngle={1}
                            cornerRadius={5}
                            dataKey="value"
                        >
                            {distributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>

                        <Tooltip
                            contentStyle={{ backgroundColor: "#fff", borderRadius: "6px", border: "1px solid #ddd" }}
                            itemStyle={{ fontSize: "14px" }}
                            formatter={(value, name, props) => (
                                <span style={{ color: props.payload.fill, fontWeight: "bold" }}>
                                    {value}
                                </span>
                            )}
                        />

                        <text 
                            x="50%" 
                            y="42%"  
                            textAnchor="middle" 
                            dominantBaseline="middle" 
                            fontSize="13px" 
                            fontWeight="500"
                            fill="#666"
                        >
                            Total Cards
                        </text>

                        <text 
                            x="50%" 
                            y="50%" 
                            textAnchor="middle" 
                            dominantBaseline="middle" 
                            fontSize="20px" 
                            fontWeight="bold"
                            fill="#333"
                        >
                            2,450
                        </text>
                        <Legend iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div> 

        </div>
    </div>
  )
}

export default MonthlyChart;