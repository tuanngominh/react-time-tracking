import React from "react";

export class TimeEntryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: new Date(),
      end: new Date(),
    };
    this.start = this.start.bind(this);
  }

  start() {
    this.setState({
      start: new Date(),
      end: new Date(),
    });
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      end: new Date(),
    });
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    let duration = "";
    if (this.state.start !== this.state.end) {
      duration = (
        <span>
          Start: {this.state.start.toString()} - End:{" "}
          {this.state.end.toString()}
        </span>
      );
    }
    return (
      <div>
        <input placeholder="What are you doing?" value={this.props.title} />
        <button onClick={this.start}>Start</button>
        {duration}
      </div>
    );
  }
}
