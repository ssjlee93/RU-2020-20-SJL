import React from "react";

function Resume() {
  return (
    <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <iframe src={require("../utils/Resume.2020.pdf")} title="resume" width="100%" height="100%"/>
            </div>
        </div>
  );
}

export default Resume;
