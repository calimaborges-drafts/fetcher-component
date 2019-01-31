import React from "react";
import FetcherComponent from "./FetcherComponent";

class DebugComponent extends React.Component {
  state = { json: null };

  fetchProjects = () => {
    const { user } = this.props;
    return fetch(`https://reqres.in/api/users/23`);
  };

  render() {
    return (
      <FetcherComponent fetcher={this.fetchProjects}>
        {(data, loading) => <pre>{JSON.stringify(data, null, 2)}</pre>}
      </FetcherComponent>
    );
  }
}

export default DebugComponent;
