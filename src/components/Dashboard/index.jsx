import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Style } from "./style";
import React from "react";
import { RevenueGraph } from "./RevenueGraph/RevenueGraph";
import { data } from "./RevenueGraph/Data";
import { PieChart } from "./PieChart/PieChart";

export const Dashboard = () => {
  const classes = Style();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div style={{ height: "92vh" }}>
        <Grid container sx={{ backgroundColor: "#F4F6F9" }}>
          <Grid item xs={6} sm={5} md={8} lg={7} xl={7}>
            <p className={classes.title}>Dashboard</p>
            <FormControl sx={{ m: 1, minWidth: 120,backgroundColor:"white" }} size="small">
              <InputLabel id="demo-select-small">Revenue</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Revenue"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>
                  <div className={classes.chartValues}>
                    <span>Last Ten days</span>
                  </div>
                </MenuItem>
                <MenuItem value={20}>
                  <div className={classes.chartValues}>
                    <span>Last Ten days</span>
                  </div>
                </MenuItem>
                <MenuItem value={30}>
                  <div className={classes.chartValues}>
                    <span>Last Thirty days</span>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={5} xl={5}></Grid>
        </Grid>
        <Grid container spacing={2} sx={{ backgroundColor: "#F4F6F9" }}>
          <Grid item xs={6} sm={5} md={8} lg={7} xl={7}>
            <div className={classes.height}>
              <RevenueGraph data={data} />
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={5} xl={5}>
            <PieChart />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
