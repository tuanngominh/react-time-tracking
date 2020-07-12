import React from "react";
import moment from "moment";

export class TimeEntryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      end: null,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    this.setState({
      start: new Date(),
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
        <input placeholder="What are you doing?" value={this.props.title} />
        {duration}
        {button}
      </div>
    );
  }
}
