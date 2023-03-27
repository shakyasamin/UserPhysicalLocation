import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  componentDidMount() {
    console.log("componentdidmount");
  }
  componentDidUpdate() {
    console.log("componentdidupdate");
  }

  render() {
    // return (
    //   <div>
    //     {this.state.latitude} {this.state.errorMessage}
    //   </div>
    // );
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
