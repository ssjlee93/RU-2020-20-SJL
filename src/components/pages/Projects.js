import React, { Component } from "react";
import Project from "../Project";
import Wrapper from "../Wrapper";
import projects from "../utils/Projects.json";

class Projects extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <h1>Projects List</h1>
        {this.state.projects.map(project => (
            <Project
            id={project.id}
            key={project.id}
            title={project.title}
            screenshot={project.screenshot}
            github={project.github}
            deplooyed={project.deplooyed}
            />
            )
            )}
          
            </Wrapper>
    );
  }
}

export default Projects;
