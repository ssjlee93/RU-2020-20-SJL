import React from "react";

function Contact(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
        <div className="list-group">
            <li className="list-group-item list-group-item-action">Phone: (201) - 673 - 0630</li>
            <li className="list-group-item list-group-item-action">E-mail: sjl558@nyu.edu</li>
            <a href="https://www.linkedin.com/in/sjl558/"className="list-group-item list-group-item-action">LinkedIn</a>
            <a href="https://github.com/ssjlee93"className="list-group-item list-group-item-action btn btn-success">GitHub</a>
        </div>
    </div>
</div>
  );
}

export default Contact;
