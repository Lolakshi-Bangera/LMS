import React from "react";
import Chart from "chart.js/auto";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { Grid, Paper } from "@material-ui/core";
import Item from "antd/lib/list/Item";

function Dashboard() {
  return (
    <>
      <Grid container spacing={8} >
        <Grid item md={4}>
          <Paper>
            <Doughnut
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "Batch Performance",
                    data: [75, 25],
                    backgroundColor: ["yellow", "blue"],
                    barThickness: 12,
                  },
                ],
              }}
            ></Doughnut>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Item>
            <Bar
              data={{
                labels: [
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                ],
                datasets: [
                  {
                    label: "Year of passing",
                    data: [1, 1, 10, 10, 10, 24, 24],
                    backgroundColor: "blue",
                    barThickness: 12,
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                scales: {
                  xAxes: [{}],
                  yAxes: [{}],
                },
              }}
            ></Bar>
          </Item>
        </Grid>
        <Grid item md={4}>
          <Item>
            <Bar
              data={{
                labels: ["Fresher", "1 Yr", "2 Yr", "3 Yr", "4 Yr"],
                datasets: [
                  {
                    label: "Experience",
                    data: [24, 18, 12, 6, 10, 14],
                    backgroundColor: "blue",
                    barThickness: 12,
                  },
                ],
              }}
              options={{
                indexAxis: "y",
               
                scales: {
                  xAxes: [{}],
                  yAxes: [{}],
                },
              }}
            ></Bar>
          </Item>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={8}>
          <Item>
            <Bar
              data={{
                labels: ["BE(CSE)", "BE(Non-CSE)", "Post Graduates", "PHD"],
                datasets: [
                  {
                    label: "Experience",
                    data: [4, 3, 12, 1, 5],
                    backgroundColor: "blue",
                    barThickness: 12,
                    borderRadius: 15,
                  },
                ],
              }}
              options={{
                
                barRadius: 4,
                scales: {
                  xAxes: [{}],
                  yAxes: [{}],
                },
              }}
            ></Bar>
          </Item>
        </Grid>
      <Grid item md={4}>
        <Paper>
          <Pie
            data={{
              labels: [
                "Excellent",
                "Good",
                "Above average",
                "Average",
                "Below average",
              ],
              datasets: [
                {
                  label: "Batch Performance",
                  data: [10, 10, 40, 5, 5],
                  backgroundColor: [
                    "red",
                    "orange",
                    "yellow",
                    "pink",
                    "blue",
                    "cyan",
                    "purple",
                  ],
                  barThickness: 12,
                },
              ],
            }}
          ></Pie>
        </Paper>
      </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
