import React from "react";

class GithubProjects extends React.Component {
  state = { githubProjects: null };

  async componentDidMount() {
    const { user } = this.props;
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const githubProjects = await response.json();
    this.setState({ githubProjects });
  }

  render() {
    const { githubProjects } = this.state;

    return (
      <React.Fragment>
        <h1>GitHub Projects</h1>
        <ul>
          {githubProjects &&
            githubProjects.map &&
            githubProjects.map(project => (
              <li key={project.id}>{project.name}</li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default GithubProjects;
