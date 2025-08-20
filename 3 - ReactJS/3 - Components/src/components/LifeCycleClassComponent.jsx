import { Component } from "react";

class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is being constructed");
  }

  componentDidMount() {
    console.log("componentDidMount: Component has mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component has updated");
    if (prevState.count !== this.state.count) {
      console.log(
        `Count changed from ${prevState.count} to ${this.state.count}`
      );
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be unmounted");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleClassComponent;
