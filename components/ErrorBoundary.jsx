import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: false,
    details: false
  };

  componentDidCatch(error) {
    console.error(error);
    this.setState({ error: true, details: error });
  }

  componentWillUnmount() {
    this.setState({ error: false, details: false });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Ops!</h1>
          <pre>{JSON.stringify(this.state.details)}</pre>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
