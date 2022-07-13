import React from "react";
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";

function Dashboard() {
  return (
    
     <div>
        <Bar
      data=
      {{
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [
          {
            data: [1, 1, 10, 10, 10, 24, 24],
          },
        ],
      }}
      >
        
      </Bar>
     </div>
    
  );
}

export default Dashboard;
