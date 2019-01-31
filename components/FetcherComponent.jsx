import React from "react";

class FetcherComponent extends React.Component {
  state = { json: null, loading: true, error: null };

  async componentDidMount() {
    const { fetcher } = this.props;

    try {
      this.setState({ loading: true });
      const response = await fetcher();
      if (response.ok) {
        const json = await response.json();
        this.setState({ json, loading: false });
      } else {
        const error = await response.json();
        this.setState({ error, loading: false });
      }
    } catch (error) {
      console.error(error);
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { json, error, loading } = this.state;
    if (loading) return <h1>Loading...</h1>;
    if (error) throw error;
    return this.props.children(json, loading);
  }
}

export default FetcherComponent;
