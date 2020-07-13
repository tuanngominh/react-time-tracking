import React from "react";
import moment from "moment";

export class TimeEntryInputWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      end: null,
      title: null,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  start() {
    const start = new Date();
    this.props.onCreate({
      title: this.state.title,
      start,
    });
    this.setState({
      start,
      end: new Date(),
    });
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  stop() {
    this.setState({
      start: null,
      end: null,
    });
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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

  get durationAsText() {
    if (this.state.start) {
      const start = moment(this.state.start);
      const end = moment(this.state.end);
      const d = moment.duration(end.diff(start, "second"), "second");
      if (d.asDays() > 1) {
        return d.humanize().toString();
      } else {
        return (
          Math.round(d.hours()) +
          " : " +
          Math.round(d.minutes()) +
          " : " +
          Math.round(d.seconds())
        );
      }
    }
    return null;
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    let duration = <span></span>;
    let button = (
      <button data-testid="start-button" onClick={this.start}>
        Start
      </button>
    );
    if (this.state.start) {
      duration = <span data-testid="duration">{this.durationAsText}</span>;
      button = (
        <button data-testid="stop-button" onClick={this.stop}>
          Stop
        </button>
      );
    }
    return (
      <div>
        <input
          placeholder="What are you doing?"
          value={this.props.title}
          onChange={this.handleTitleChange}
        />
        {duration}
        {button}
      </div>
    );
  }
}
