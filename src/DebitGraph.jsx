import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mar", value: 110 },
  {value:90},
  {value:100},
  {value:80},
  { name: "Apr", value: 85 },
  {value:90},
  {value:75},
  {value:80},
  {value:70},
  { name: "May", value: 75 },
  {value:70},
  {value:75},
  { name: "Jun", value: 65 },
  {value:67},
  {value:60},
  {value:63},
  {value:45},
  {value:50},
  { name: "Jul", value: 53},
  {value:40},
  {value:42},
  {value:30},
  { name: "Aug", value: 25 },
 
];

const DebitGraph = () => {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <ResponsiveContainer width="80%" height="80%">
        <AreaChart data={data}>
          {/* Solid Grid Lines */}
          <CartesianGrid stroke="#444" />

          {/* X-Axis */}
          <XAxis
            dataKey="name"
            tick={{ fill: "#aaa" }}
            interval={0} // Show all 6 labels
          />

          {/* Y-Axis with 7 Ticks for 6 Boxes */}
          <YAxis
            tick={{ fill: "#aaa" }}
            ticks={[30, 60, 90, 120]} // 7 ticks for 6 boxes
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "none" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />

          {/* Gradient Fill */}
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#43F58A" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#42FFB0" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Area Chart */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#42FFB0"
            strokeWidth={2}
            fill="url(#gradientFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DebitGraph;

















// import React from "react";
// import {
//   AreaChart,
//   Area,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// const data = [
//   { name: "Mar", value: 110 },
//   { value: 90 },
//   { value: 100 },
//   { value: 80 },
//   { name: "Apr", value: 85 },
//   { value: 90 },
//   { value: 75 },
//   { value: 80 },
//   { value: 70 },
//   { name: "May", value: 75 },
//   { value: 70 },
//   { value: 75 },
//   { name: "Jun", value: 65 },
//   { value: 67 },
//   { value: 60 },
//   { value: 63 },
//   { value: 45 },
//   { value: 50 },
//   { name: "Jul", value: 53 },
//   { value: 40 },
//   { value: 42 },
//   { value: 30 },
//   { name: "Aug", value: 25 },
// ];

// const DebitGraph = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#1e1e1e",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <ResponsiveContainer width="80%" height="80%">
//         <AreaChart data={data}>
//           {/* Solid Grid Lines */}
//           <CartesianGrid stroke="#444" />

//           {/* X-Axis */}
//           <XAxis
//             dataKey="name"
//             tick={{ fill: "#aaa" }}
//             interval={0} // Show all labels
//           />

//           {/* Y-Axis */}
//           <YAxis
//             tick={{ fill: "#aaa" }}
//             domain={[0, 120]} // Adjust domain as per your data range
//           />

//           {/* Tooltip */}
//           <Tooltip
//             contentStyle={{ backgroundColor: "#333", border: "none" }}
//             labelStyle={{ color: "#fff" }}
//             itemStyle={{ color: "#fff" }}
//           />

//           {/* Gradient Fill */}
//           <defs>
//             <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#43F58A" stopOpacity={0.8} />
//               <stop offset="100%" stopColor="#42FFB0" stopOpacity={0} />
//             </linearGradient>
//           </defs>

//           {/* Area Chart */}
//           <Area
//             type="monotone"
//             dataKey="value"
//             stroke="#42FFB0"
//             strokeWidth={2}
//             fill="url(#gradientFill)"
//             isAnimationActive={false} // Disable animation for more clarity
//             connectNulls={false} // Prevent connecting null values
//             segment={data.map((entry, index, arr) => {
//               if (arr[index - 1]?.name === "Mar" && entry.name === "Apr") {
//                 return { stroke: "none" }; // Remove the line between Mar and Apr
//               }
//               return { stroke: "#42FFB0" };
//             })}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default DebitGraph;
