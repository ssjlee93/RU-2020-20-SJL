import React from "react";
// import { Typography, Avatar, Grid, Box } from "@material-ui/core";

const Project = (props) => 
  (
  <div className="card mb-5">
    {/* <Avatar className={classes.avatar} src={props.screenshot} alt="Rafael Quadros" /> */}
    <img src={require("./utils/screenshots/ru-12.PNG")} className="card-img-top" alt={props.title}  />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <a href={props.github} className="btn btn-success">GitHub</a>
      <a href={props.deployed} className="btn btn-outline-success">Deployed</a>
    </div>
  </div>
)

export default Project;